import { Testimonial } from "../models/Testimoniales.js";
import { Viaje } from "../models/Viaje.js";

const paginaInicio = async (req, res) => {
  const promiseDB = [];
  promiseDB.push(Viaje.findAll({ limit: 3 }));
  promiseDB.push(Testimonial.findAll({
    limit: 3,
    order: [['id', 'DESC']]
  }));

  const resultado = await Promise.all(promiseDB);

  res.render('inicio', {
    pagina: 'Inicio',
    clase: 'home',
    viajes: resultado[0],
    testimonios: resultado[1]
  });
};

const paginaNosotros = (req, res) => {
  res.render('nosotros', {
    pagina: 'Nosotros'
  });
};

const paginaViajes = async (req, res) => {
  const viajes = await Viaje.findAll();

  res.render('viajes', {
    pagina: 'Viajes',
    viajes: viajes
  });
};

const paginaTestimonios = async (req, res) => {
  const testimonios = await Testimonial.findAll();
  res.render('testimonios', {
    pagina: 'Testimonios',
    testimonios: testimonios
  });
};

const paginaDetallesViajes = async (req, res) => {
  const { slug } = req.params;

  try {
    const resultado = await Viaje.findOne({ where: { slug: slug } });
    res.render('viaje', {
      pagina: 'Informacion del Viaje',
      resultado: resultado
    })
  } catch (error) {
    console.log(error)
  }
};

const guardarTestimonios = async (req, res) => {
  const { nombre, correo, mensaje } = req.body;
  const errores = [];

  if (nombre.trim() === '') {
    errores.push("El nombre está vacío.");
  }

  if (correo.trim() === '') {
    errores.push("El correo está vacío.");
  }

  if (mensaje.trim() === '') {
    errores.push("El mensaje está vacío.");
  }

  if (errores.length > 0) {
    const testimonios = await Testimonial.findAll({
      limit: 6,
      order: [['id', 'DESC']],
    });

    res.render('testimonios', {
      pagina: 'Testimonios',
      testimonios: testimonios,
      errores: errores,
      nombre: nombre,
      correo: correo,
      mensaje: mensaje
    });
  } else {
    await Testimonial.create({ nombre: nombre, correoelectronico: correo, mensaje: mensaje });
    res.redirect('/testimonios');
  }


}

export {
  paginaInicio,
  paginaNosotros,
  paginaTestimonios,
  paginaViajes,
  paginaDetallesViajes,
  guardarTestimonios
}
