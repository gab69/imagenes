import { useState, useEffect } from 'react';
import './App.css';

// Definir tipos para las imágenes de la galería
interface GalleryImage {
  id: number;
  src: string;
  alt: string;
}

// Definir tipos para los servicios
interface Service {
  icon: string;
  title: string;
  description: string;
}

// Definir tipos para los valores
interface Value {
  icon: string;
  title: string;
  description: string;
}

// Definir tipos para los procesos
interface Process {
  number: number;
  title: string;
  description: string;
}

// Definir tipos para los testimonios
interface Testimonial {
  text: string;
  name: string;
  role: string;
  image: string;
}

// Definir tipos para el estado del lightbox
interface LightboxImage {
  src: string;
  alt: string;
}

export const App = () => {
  const [menuOpen, setMenuOpen] = useState<boolean>(false);
  const [lightboxOpen, setLightboxOpen] = useState<boolean>(false);
  const [lightboxImage, setLightboxImage] = useState<LightboxImage>({ 
    src: '', 
    alt: '' 
  });
  const [activeSection, setActiveSection] = useState<string>('inicio');
  const [currentYear, setCurrentYear] = useState<number>(2024);

  // Imágenes de la galería - usando imágenes de ejemplo de Unsplash
  const galleryImages: GalleryImage[] = [
    { id: 1, src: 'https://images.unsplash.com/photo-1574732011388-8e9d1df3f5a1?w=600&h=600&fit=crop', alt: 'Cerámica conmemorativa con foto' },
    { id: 2, src: 'https://images.unsplash.com/photo-1581579431537-3415688e2c7d?w=600&h=600&fit=crop', alt: 'Placa conmemorativa en cerámica' },
    { id: 3, src: 'https://images.unsplash.com/photo-1544787219-7f47ccb76574?w-600&h=600&fit=crop', alt: 'Cerámica personalizada con mensaje' },
    { id: 4, src: 'https://images.unsplash.com/photo-1536922246289-88c42f957773?w=600&h=600&fit=crop', alt: 'Jarrón conmemorativo' },
    { id: 5, src: 'https://images.unsplash.com/photo-1578500494198-246f612d3b3d?w=600&h=600&fit=crop', alt: 'Cerámica con diseño floral' },
    { id: 6, src: 'https://images.unsplash.com/photo-1563453392212-326f5e854473?w=600&h=600&fit=crop', alt: 'Placa de cerámica con nombre' },
    { id: 7, src: 'https://images.unsplash.com/photo-1541961017774-22349e4a1262?w=600&h=600&fit=crop', alt: 'Cerámica con retrato' },
    { id: 8, src: 'https://images.unsplash.com/photo-1575224300306-1b8da36134ec?w=600&h=600&fit=crop', alt: 'Urna conmemorativa' },
    { id: 9, src: 'https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?w=600&h=600&fit=crop', alt: 'Cerámica conmemorativa dorada' },
    { id: 10, src: 'https://images.unsplash.com/photo-1590273463280-9a361e80e3e8?w=600&h=600&fit=crop', alt: 'Detalle de cerámica artesanal' },
    { id: 11, src: 'https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?w=600&h=600&fit=crop', alt: 'Cerámica con diseño moderno' },
    { id: 12, src: 'https://images.unsplash.com/photo-1589351428103-18d50eb94c51?w=600&h=600&fit=crop', alt: 'Placa conmemorativa en mármol' },
    { id: 13, src: 'https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?w=600&h=600&fit=crop', alt: 'Cerámica con angel' },
    { id: 14, src: 'https://images.unsplash.com/photo-1543083115-638c32cd3d58?w=600&h=600&fit=crop', alt: 'Cerámica con cruz' },
    { id: 15, src: 'https://images.unsplash.com/photo-1598301257981-6d6a2c201b5d?w=600&h=600&fit=crop', alt: 'Cerámica conmemorativa ovalada' },
  ];

  // Servicios - usando iconos de Boxicons y emojis como respaldo
  const services: Service[] = [
    {
      icon: 'bx bx-recycle',
      title: 'Restauración',
      description: 'Restauramos piezas dañadas o antiguas para devolverles su belleza original y valor sentimental.'
    },
    {
      icon: 'bx bx-palette',
      title: 'Diseños Personalizados',
      description: 'Creamos diseños únicos basados en fotografías y recuerdos de tu ser querido.'
    },
    {
      icon: 'bx bx-cookie',
      title: 'Quemado en Horno',
      description: 'Proceso especializado que garantiza la durabilidad y calidad de cada pieza.'
    },
    {
      icon: 'bx bx-package',
      title: 'Envíos a Domicilio',
      description: 'Entregamos tu pedido de forma segura y cuidadosa en la comodidad de tu hogar.'
    },
    {
      icon: 'bx bx-ruler',
      title: 'Diversos Tamaños',
      description: 'Ofrecemos piezas en diferentes dimensiones para adaptarse a tus necesidades.'
    },
    {
      icon: 'bx bx-edit-alt',
      title: 'Personalización Completa',
      description: 'Desde texto hasta imágenes, cada detalle es personalizable según tus preferencias.'
    }
  ];

  // Valores
  const values: Value[] = [
    { icon: 'bx bx-heart', title: 'Respeto y Sensibilidad', description: 'Entendemos la importancia de cada memoria y tratamos cada trabajo con la máxima sensibilidad y respeto hacia los seres queridos que han partido.' },
    { icon: 'bx bx-star', title: 'Calidad y Durabilidad', description: 'Utilizamos materiales de primera calidad y técnicas que garantizan que nuestros productos perduren en el tiempo como un homenaje eterno.' },
    { icon: 'bx bx-customize', title: 'Personalización', description: 'Cada trabajo es único, diseñado específicamente para capturar la esencia de la persona y reflejar su personalidad y legado.' },
    { icon: 'bx bx-time-five', title: 'Compromiso y Entrega', description: 'Cumplimos con los plazos establecidos y mantenemos una comunicación constante con nuestros clientes durante todo el proceso.' }
  ];

  // Procesos
  const processes: Process[] = [
    { number: 1, title: 'Consulta Inicial', description: 'Nos reunimos contigo para entender tus necesidades, recopilar información sobre tu ser querido y discutir las opciones disponibles.' },
    { number: 2, title: 'Diseño Personalizado', description: 'Creamos un diseño único que capture la esencia de la persona, incorporando elementos significativos y detalles especiales solicitados.' },
    { number: 3, title: 'Aprobación del Diseño', description: 'Te presentamos el diseño para tu revisión y aprobación, realizando los ajustes necesarios hasta que estés completamente satisfecho.' },
    { number: 4, title: 'Creación y Quemado', description: 'Fabricamos la pieza utilizando materiales de calidad y la sometemos al proceso de quemado en horno especializado para garantizar durabilidad.' },
    { number: 5, title: 'Control de Calidad', description: 'Realizamos una inspección detallada para asegurar que la pieza cumple con nuestros estándares de excelencia antes de la entrega.' },
    { number: 6, title: 'Entrega y Seguimiento', description: 'Entregamos personalmente la pieza terminada y nos aseguramos de tu completa satisfacción con nuestro trabajo.' }
  ];

  // Testimonios
  const testimonials: Testimonial[] = [
    {
      text: '"El trabajo realizado por Marmolito Calisa superó todas mis expectativas. Capturaron perfectamente la esencia de mi padre en la cerámica. Es un tesoro para nuestra familia."',
      name: 'María González',
      role: 'Hija de cliente',
      image: 'https://images.unsplash.com/photo-1494790108755-2616b786d4c1?w=200&h=200&fit=crop&crop=face'
    },
    {
      text: '"La sensibilidad y profesionalismo con el que trataron nuestro pedido nos conmovió. La cerámica de mi esposa es ahora el centro de nuestro hogar y nos recuerda su amor cada día."',
      name: 'Carlos Martínez',
      role: 'Viudo de cliente',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop&crop=face'
    },
    {
      text: '"Restauraron una pieza familiar muy antigua que pensábamos perdida. No solo la recuperaron, sino que ahora luce mejor que nunca. Estamos eternamente agradecidos."',
      name: 'Ana Rodríguez',
      role: 'Cliente de restauración',
      image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=200&h=200&fit=crop&crop=face'
    }
  ];

  // Manejar apertura de lightbox
  const openLightbox = (src: string, alt: string): void => {
    setLightboxImage({ src, alt });
    setLightboxOpen(true);
    document.body.style.overflow = 'hidden';
  };

  // Manejar cierre de lightbox
  const closeLightbox = (): void => {
    setLightboxOpen(false);
    document.body.style.overflow = 'auto';
  };

  // Manejar clic en imagen de galería
  const handleImageClick = (src: string, alt: string): void => {
    openLightbox(src, alt);
  };

  // Manejar error en carga de imagen
  const handleImageError = (e: React.SyntheticEvent<HTMLImageElement, Event>): void => {
    const target = e.target as HTMLImageElement;
    // Iconos de respaldo según el contexto
    if (target.classList.contains('cliente-img')) {
      target.src = 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=200&h=200&fit=crop&crop=face';
    } else if (target.alt.includes('Icono') || target.src.includes('icon')) {
      target.style.display = 'none';
      // Crear un elemento de icono como respaldo
      const parent = target.parentElement;
      if (parent) {
        const serviceTitle = parent.querySelector('h3')?.textContent || '';
        const iconSpan = document.createElement('span');
        iconSpan.className = 'icon-fallback';
        iconSpan.innerHTML = getEmojiForService(serviceTitle);
        parent.insertBefore(iconSpan, target.nextSibling);
      }
    } else {
      target.src = 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=600&h=600&fit=crop';
      target.alt = 'Imagen no disponible';
    }
    target.classList.add('img-error');
  };

  // Función auxiliar para obtener emojis como respaldo de iconos
  const getEmojiForService = (title: string): string => {
    const emojiMap: { [key: string]: string } = {
      'Restauración': '🔄',
      'Diseños Personalizados': '🎨',
      'Quemado en Horno': '🔥',
      'Envíos a Domicilio': '📦',
      'Diversos Tamaños': '📏',
      'Personalización Completa': '✏️',
    };
    return emojiMap[title] || '⭐';
  };

  // Cerrar menú al hacer clic en enlace
  const handleNavClick = (sectionId: string): void => {
    setMenuOpen(false);
    setActiveSection(sectionId);
    
    // Desplazarse suavemente a la sección
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Configurar observador de intersección para animaciones
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries: IntersectionObserverEntry[]) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            
            // Actualizar sección activa para el menú
            if (entry.target.id) {
              setActiveSection(entry.target.id);
            }
          }
        });
      },
      { threshold: 0.1, rootMargin: '-100px 0px -100px 0px' }
    );

    // Observar todos los elementos con clases de animación
    const animatedElements = document.querySelectorAll(
      '.fade-in, .slide-in-left, .slide-in-right, .valor-card, .img-galeria, .con-expert, .proceso-paso, .testimonio-card'
    );
    
    animatedElements.forEach((el) => observer.observe(el));

    return () => {
      animatedElements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  // Cerrar lightbox con tecla Escape
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent): void => {
      if (e.key === 'Escape' && lightboxOpen) {
        closeLightbox();
      }
    };

    document.addEventListener('keydown', handleEscape);
    
    return () => {
      document.removeEventListener('keydown', handleEscape);
    };
  }, [lightboxOpen]);

  // Agregar Boxicons al documento
  useEffect(() => {
    const link = document.createElement('link');
    link.href = 'https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css';
    link.rel = 'stylesheet';
    document.head.appendChild(link);

    return () => {
      document.head.removeChild(link);
    };
  }, []);

  // Obtener el año actual al cargar el componente
  useEffect(() => {
    const year = new Date().getFullYear();
    setCurrentYear(year);
  }, []);

  return (
    <div className="marmolito-calisa">
      {/* Botón flotante WhatsApp */}
      <a 
        href="https://wa.me/51964607074" 
        className="whatsapp-float" 
        target="_blank" 
        rel="noopener noreferrer" 
        aria-label="Contactar por WhatsApp"
      >
        <i className='bx bxl-whatsapp'></i>
      </a>

      {/* Header */}
      <header className="header" id="inicio">
        <div className="header-bg" style={{
          backgroundImage: 'url(https://images.unsplash.com/photo-1542782495-07b8c8a1dc8e?w=1920&h=1080&fit=crop)'
        }}></div>
        <div className="header-overlay"></div>
        
        {/* Menú hamburguesa CORREGIDO */}
        <div className={`hamburger-container ${menuOpen ? 'menu-open' : ''}`}>
          <button 
            className={`hamburger ${menuOpen ? 'active' : ''}`} 
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label={menuOpen ? 'Cerrar menú' : 'Abrir menú'}
            aria-expanded={menuOpen}
          >
            <div className="hamburger-box">
              <div className="hamburger-inner"></div>
            </div>
            <span className="hamburger-label">
              {menuOpen ? 'CERRAR' : 'MENÚ'}
            </span>
          </button>
        </div>

        {/* Menú de navegación */}
        <nav className={`menu-navegacion ${menuOpen ? 'active' : ''}`} aria-hidden={!menuOpen}>
          <div className="menu-header">
            <h3>Marmolito Calisa</h3>
            <p>Memorias eternas en cerámica</p>
          </div>
          
          <div className="menu-links">
            <a 
              href="#inicio" 
              onClick={(e) => {
                e.preventDefault();
                handleNavClick('inicio');
              }}
              className={activeSection === 'inicio' ? 'active' : ''}
            >
              <i className='bx bx-home'></i>
              <span>Inicio</span>
            </a>
            <a 
              href="#Somos" 
              onClick={(e) => {
                e.preventDefault();
                handleNavClick('Somos');
              }}
              className={activeSection === 'Somos' ? 'active' : ''}
            >
              <i className='bx bx-group'></i>
              <span>¿Quiénes Somos?</span>
            </a>
            <a 
              href="#Valores" 
              onClick={(e) => {
                e.preventDefault();
                handleNavClick('Valores');
              }}
              className={activeSection === 'Valores' ? 'active' : ''}
            >
              <i className='bx bx-heart'></i>
              <span>Nuestros Valores</span>
            </a>
            <a 
              href="#Trabajos" 
              onClick={(e) => {
                e.preventDefault();
                handleNavClick('Trabajos');
              }}
              className={activeSection === 'Trabajos' ? 'active' : ''}
            >
              <i className='bx bx-images'></i>
              <span>Nuestros Trabajos</span>
            </a>
            <a 
              href="#Proceso" 
              onClick={(e) => {
                e.preventDefault();
                handleNavClick('Proceso');
              }}
              className={activeSection === 'Proceso' ? 'active' : ''}
            >
              <i className='bx bx-cog'></i>
              <span>Nuestro Proceso</span>
            </a>
            <a 
              href="#Servicios" 
              onClick={(e) => {
                e.preventDefault();
                handleNavClick('Servicios');
              }}
              className={activeSection === 'Servicios' ? 'active' : ''}
            >
              <i className='bx bx-briefcase'></i>
              <span>Servicios</span>
            </a>
            <a 
              href="#Testimonios" 
              onClick={(e) => {
                e.preventDefault();
                handleNavClick('Testimonios');
              }}
              className={activeSection === 'Testimonios' ? 'active' : ''}
            >
              <i className='bx bx-message-dots'></i>
              <span>Testimonios</span>
            </a>
            <a 
              href="#contacto" 
              onClick={(e) => {
                e.preventDefault();
                handleNavClick('contacto');
              }}
              className={activeSection === 'contacto' ? 'active' : ''}
            >
              <i className='bx bx-phone'></i>
              <span>Contacto</span>
            </a>
          </div>
          
          <div className="menu-footer">
            <div className="menu-contact">
              <p><i className='bx bx-phone'></i> +51 964 607 074</p>
            </div>
            <div className="menu-social">
              <a href="https://www.facebook.com/jgqcaliza?locale=es_LA" aria-label="Facebook"><i className='bx bxl-facebook'></i></a>
              <a href="https://wa.me/51964607074" aria-label="WhatsApp"><i className='bx bxl-whatsapp'></i></a>
            </div>
          </div>
        </nav>
        
        <div className="contenedor head">
          <h1 className="titulo">"La mejor manera de mantener a tus seres queridos cerca de ti"</h1>
          <p className="copy">Marmolito Calisa - Fotografía y Cerámica Conmemorativa</p>
          <div className="header-buttons">
            <a 
              href="#Somos" 
              className="btn-scroll" 
              onClick={(e) => {
                e.preventDefault();
                handleNavClick('Somos');
              }}
            >
              <i className='bx bx-chevron-down'></i> Conócenos
            </a>
            <a 
              href="#contacto" 
              className="btn-contact" 
              onClick={(e) => {
                e.preventDefault();
                handleNavClick('contacto');
              }}
            >
              <i className='bx bx-message'></i> Contáctanos
            </a>
          </div>
        </div>
      </header>

      <main>
        {/* Sección Quiénes Somos */}
        <section className="contenedor" id="Somos">
          <h2 className="section-title fade-in">¿Quiénes Somos?</h2>
          <div className="contenedor-servicio">
            <div className="somos-image-container slide-in-left">
              <img 
                src="https://images.unsplash.com/photo-1578500494198-246f612d3b3d?w=600&h=600&fit=crop" 
                alt="Artista trabajando en cerámica" 
                className="somos-image"
                onError={handleImageError}
              />
              <div className="somos-badge">
                <i className='bx bx-award'></i>
                <span>+10 años de experiencia</span>
              </div>
            </div>
            
            <div className="checklist-servicio slide-in-right">
              <div className="service">
                <div className="service-header">
                  <div className="service-icon">
                    <i className='bx bx-target-lock'></i>
                  </div>
                  <h3 className="n-service">Nuestra Misión</h3>
                </div>
                <p>En Marmolito Calisa, nos dedicamos a preservar la memoria de aquellos que han partido, a través de la fotografía y la cerámica. Creemos que cada vida es valiosa y que las personas que han fallecido merecen ser recordadas con amor y respeto.</p>
                <p className="mission-quote">"Nuestra misión es proporcionar un servicio de calidad, empático y personalizado, que honre la vida y el legado de aquellos que ya no están con nosotros."</p>
              </div>
              
              <div className="service">
                <div className="service-header">
                  <div className="service-icon">
                    <i className='bx bx-show'></i>
                  </div>
                  <h3 className="n-service">Nuestra Visión</h3>
                </div>
                <p>"Ser la mejor opción para las familias que buscan honrar la memoria de sus seres queridos a través de una cerámica única y personalizada. Queremos ser reconocidos como líderes en el mercado de productos conmemorativos y ser un símbolo de respeto y cariño hacia aquellos que ya no están con nosotros."</p>
              </div>
            </div>
          </div>
        </section>
        
        {/* Sección Valores */}
        <section className="contenedor valores-section" id="Valores">
          <h2 className="section-title fade-in">Nuestros Valores</h2>
          <p className="section-subtitle">Principios que guían nuestro trabajo y nos definen como empresa</p>
          <div className="valores-grid">
            {values.map((value: Value, index: number) => (
              <div className="valor-card" key={index}>
                <div className="valor-icon-container">
                  <div className="valor-icon-bg"></div>
                  <i className={value.icon}></i>
                </div>
                <h3>{value.title}</h3>
                <p>{value.description}</p>
              </div>
            ))}
          </div>
        </section>
    
        {/* Sección Galería */}
        <section className="Trabajos" id="Trabajos">
          <div className="contenedor">
            <h2 className="section-title fade-in">Nuestros Trabajos</h2>
            <p className="section-subtitle">Una muestra de nuestras piezas conmemorativas</p>
            <div className="contenedor-galeria">
              {galleryImages.map((image: GalleryImage) => (
                <div 
                  className="img-container" 
                  key={image.id}
                  onClick={() => handleImageClick(image.src, image.alt)}
                  role="button"
                  tabIndex={0}
                  onKeyDown={(e: React.KeyboardEvent) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                      handleImageClick(image.src, image.alt);
                    }
                  }}
                >
                  <div className="img-overlay">
                    <i className='bx bx-zoom-in'></i>
                    <span>Ver más</span>
                  </div>
                  <img 
                    src={image.src} 
                    alt={image.alt} 
                    className="img-galeria"
                    onError={handleImageError}
                    loading="lazy"
                  />
                </div>
              ))}
            </div>
          </div>
        </section>
        
        {/* Lightbox */}
        {lightboxOpen && (
          <div 
            className="imagen-light show" 
            onClick={closeLightbox}
            role="dialog"
            aria-modal="true"
            aria-label="Vista ampliada de la imagen"
          >
            <div 
              className="close" 
              onClick={closeLightbox}
              role="button"
              tabIndex={0}
              onKeyDown={(e: React.KeyboardEvent) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  closeLightbox();
                }
              }}
              aria-label="Cerrar vista ampliada"
            >
              <i className='bx bx-x'></i>
            </div>
            <div className="lightbox-content">
              <img 
                src={lightboxImage.src} 
                alt={lightboxImage.alt} 
                className="agregar-imagen showImage"
                onClick={(e: React.MouseEvent) => e.stopPropagation()}
                onError={handleImageError}
              />
              <div className="lightbox-caption">
                <p>{lightboxImage.alt}</p>
                <button 
                  className="lightbox-download"
                  onClick={() => window.open(lightboxImage.src, '_blank')}
                >
                  <i className='bx bx-download'></i>
                </button>
              </div>
            </div>
          </div>
        )}
        
        {/* Sección Proceso */}
        <section className="contenedor proceso-section" id="Proceso">
          <h2 className="section-title fade-in">Nuestro Proceso de Trabajo</h2>
          <p className="section-subtitle">Cada paso diseñado con cuidado y dedicación</p>
          <div className="proceso-timeline">
            {processes.map((process: Process, index: number) => (
              <div 
                className={`proceso-paso ${index % 2 === 0 ? 'odd' : 'even'}`} 
                key={process.number}
              >
                <div className="paso-contenido">
                  <div className="paso-header">
                    <span className="paso-number">{process.number}</span>
                    <h3>{process.title}</h3>
                  </div>
                  <p>{process.description}</p>
                </div>
                <div className="paso-connector">
                  {index < processes.length - 1 && (
                    <div className="connector-line"></div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Sección Servicios */}
        <section className="contenedor servicios-section" id="Servicios">
          <h2 className="section-title fade-in">Nuestros Servicios</h2>
          <p className="section-subtitle">Soluciones completas para honrar a tus seres queridos</p>
          <section className="experts">
            {services.map((service: Service, index: number) => (
              <div className="con-expert" key={index}>
                <div className="expert-icon-container">
                  <div className="expert-icon-bg"></div>
                  <i className={service.icon}></i>
                </div>
                <h3 className="n-expert">{service.title}</h3>
                <p className="service-desc">{service.description}</p>
              </div>
            ))}
          </section>
        </section>
        
        {/* Sección Testimonios */}
        <section className="contenedor testimonios-section" id="Testimonios">
          <h2 className="section-title fade-in">Testimonios de Clientes</h2>
          <p className="section-subtitle">Lo que dicen las familias que han confiado en nosotros</p>
          <div className="testimonios-container">
            {testimonials.map((testimonial: Testimonial, index: number) => (
              <div className="testimonio-card" key={index}>
                <div className="testimonio-quote">
                  <i className='bx bxs-quote-left'></i>
                </div>
                <p className="testimonio-text">{testimonial.text}</p>
                <div className="testimonio-cliente">
                  <div className="cliente-avatar">
                    <img 
                      src={testimonial.image} 
                      alt={testimonial.name} 
                      className="cliente-img"
                      onError={handleImageError}
                    />
                  </div>
                  <div className="cliente-info">
                    <h4>{testimonial.name}</h4>
                    <p>{testimonial.role}</p>
                    <div className="cliente-rating">
                      {[...Array(5)].map((_, i) => (
                        <i key={i} className='bx bxs-star'></i>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer id="contacto">
        <div className="contenedor footer-content">
          <div className="footer-main">
            <div className="footer-brand">
              <h2 className="brand">Marmolito Calisa</h2>
              <p className="brand-tagline">Memorias eternas en cerámica</p>
              <p className="brand-description">Un regalo eterno para los que ya no están con nosotros. Honramos la memoria con amor y respeto.</p>
              <div className="footer-social">
                <a href="https://www.facebook.com/jgqcaliza?locale=es_LA" aria-label="Facebook"><i className='bx bxl-facebook'></i></a>
                <a href="https://wa.me/51964607074" aria-label="WhatsApp"><i className='bx bxl-whatsapp'></i></a>
              </div>
            </div>
            
            <div className="footer-contact">
              <h3>Contacto</h3>
              <div className="contact-item">
                <i className='bx bx-phone'></i>
                <div>
                  <p>Teléfono</p>
                  <span>+51 964 607 074</span>
                </div>
              </div>
              
              <div className="contact-item">
                <i className='bx bx-map'></i>
                <div>
                  <p>Dirección</p>
                  <span>Huancayo, Perú</span>
                </div>
              </div>
              <div className="contact-item">
                <i className='bx bx-time'></i>
                <div>
                  <p>Horario</p>
                  <span>Lun-Vie: 9:00-18:00</span>
                </div>
              </div>
            </div>
          </div>
          
          <div className="footer-links">
            <div className="footer-col">
              <h3>Enlaces Rápidos</h3>
              <ul>
                <li><a href="#inicio" onClick={(e) => {
                  e.preventDefault();
                  handleNavClick('inicio');
                }}><i className='bx bx-chevron-right'></i> Inicio</a></li>
                <li><a href="#Somos" onClick={(e) => {
                  e.preventDefault();
                  handleNavClick('Somos');
                }}><i className='bx bx-chevron-right'></i> ¿Quiénes Somos?</a></li>
                <li><a href="#Trabajos" onClick={(e) => {
                  e.preventDefault();
                  handleNavClick('Trabajos');
                }}><i className='bx bx-chevron-right'></i> Nuestros Trabajos</a></li>
                <li><a href="#Servicios" onClick={(e) => {
                  e.preventDefault();
                  handleNavClick('Servicios');
                }}><i className='bx bx-chevron-right'></i> Servicios</a></li>
              </ul>
            </div>
            
            <div className="footer-col">
              <h3>Servicios</h3>
              <ul>
                <li><a href="#Servicios" onClick={(e) => {
                  e.preventDefault();
                  handleNavClick('Servicios');
                }}><i className='bx bx-chevron-right'></i> Cerámica Personalizada</a></li>
                <li><a href="#Servicios" onClick={(e) => {
                  e.preventDefault();
                  handleNavClick('Servicios');
                }}><i className='bx bx-chevron-right'></i> Restauración</a></li>
                <li><a href="#Servicios" onClick={(e) => {
                  e.preventDefault();
                  handleNavClick('Servicios');
                }}><i className='bx bx-chevron-right'></i> Fotografía Conmemorativa</a></li>
                <li><a href="#Servicios" onClick={(e) => {
                  e.preventDefault();
                  handleNavClick('Servicios');
                }}><i className='bx bx-chevron-right'></i> Envíos a Domicilio</a></li>
              </ul>
            </div>
            
            <div className="footer-col">
              <h3>Legal</h3>
              <ul>
                <li><a href="#"><i className='bx bx-chevron-right'></i> Política de Privacidad</a></li>
                <li><a href="#"><i className='bx bx-chevron-right'></i> Términos de Servicio</a></li>
                <li><a href="#"><i className='bx bx-chevron-right'></i> Aviso Legal</a></li>
                <li><a href="#"><i className='bx bx-chevron-right'></i> Política de Cookies</a></li>
              </ul>
            </div>
          </div>
          
          <div className="footer-bottom">
            <p>&copy; {currentYear} Marmolito Calisa. Todos los derechos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};