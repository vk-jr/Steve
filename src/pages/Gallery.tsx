
import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import {
  image1, image2, image3, image4, image5, image6, image7, image8, image9, image10,
  image11, image12, image13, image14, image15, image16, image17, image18, image19, image20,
  bajaRacing
} from '../assets/imageImports';
import costalVideo from '../assets/videos/costal.mp4';
import inside1Video from '../assets/videos/inside1.mp4';
import inside2Video from '../assets/videos/inside2.mp4';
import inside3Video from '../assets/videos/inside3.mp4';
import outside1Video from '../assets/videos/outside1.mp4';
import outside2Video from '../assets/videos/outside2.mp4';
import outside3Video from '../assets/videos/outside3.mp4';
import outside4Video from '../assets/videos/outside4.mp4';
import outside5Video from '../assets/videos/outside5.mp4';
import outside6Video from '../assets/videos/outside6.mp4';

const Gallery = () => {
  const [activeFilter, setActiveFilter] = useState('Photo Gallery');
  const [isTransitioning, setIsTransitioning] = useState(false);

  const filters = ['Video Gallery', 'Photo Gallery', 'Home Exteriors', 'Home Interiors', 'Baja', 'Flora & Fauna', 'San Felipe'];

  const heroImages: { [key: string]: string } = {
    'Video Gallery': image1,
    'Photo Gallery': image14,
    'Home Exteriors': image5,
    'Home Interiors': image16,
    'Baja': image8,
    'Flora & Fauna': image11,
    'San Felipe': image7
  };

  const tiles = [0, 1, 2, 3, 4];

  const handleFilterChange = (filter: string) => {
    if (filter === activeFilter) return;
    setIsTransitioning(true);
    setTimeout(() => {
      setActiveFilter(filter);
      setTimeout(() => {
        setIsTransitioning(false);
      }, 700);
    }, 350);
  };

  const videos = [
    { src: costalVideo, title: 'Coastal Views' },
    { src: outside1Video, title: 'Outside View 1' },
    { src: outside2Video, title: 'Outside View 2' },
    { src: outside3Video, title: 'Outside View 3' },
    { src: outside4Video, title: 'Outside View 4' },
    { src: outside5Video, title: 'Outside View 5' },
    { src: outside6Video, title: 'Outside View 6' },
    { src: inside1Video, title: 'Inside View 1' },
    { src: inside2Video, title: 'Inside View 2' },
    { src: inside3Video, title: 'Inside View 3' }
  ];

  const images = [
    // Home Exteriors
    { src: image3, category: 'Home Exteriors' },
    { src: image4, category: 'Home Exteriors' },
    // Home Interiors
    { src: image1, category: 'Home Interiors' },
    { src: image2, category: 'Home Interiors' },
    { src: image5, category: 'Home Interiors' },
    { src: image10, category: 'Home Interiors' },
    // Remaining images categorized
    { src: image6, category: 'Photo Gallery' },
    { src: image7, category: 'San Felipe' },
    { src: image8, category: 'Baja' },
    { src: image9, category: 'Flora & Fauna' },
    { src: image11, category: 'Flora & Fauna' },
    { src: image12, category: 'San Felipe' },
    { src: image13, category: 'Photo Gallery' },
    { src: image14, category: 'Photo Gallery' },
    { src: image15, category: 'Baja' },
    { src: image16, category: 'Photo Gallery' },
    { src: image17, category: 'Photo Gallery' },
    { src: image18, category: 'Photo Gallery' },
    { src: image19, category: 'Flora & Fauna' },
    { src: image20, category: 'San Felipe' },
    { src: bajaRacing, category: 'Baja' }
  ];

  const filteredImages = (activeFilter === 'ALL' || activeFilter === 'Photo Gallery')
    ? images
    : images.filter(img => img.category === activeFilter);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen overflow-hidden">
        <div className="absolute inset-0">
          {/* Tile Transition Overlay */}
          <AnimatePresence>
            {isTransitioning && (
              <div className="absolute inset-0 z-10">
                {tiles.map((index) => (
                  <motion.div
                    key={index}
                    className="absolute left-0 h-[20%] bg-black"
                    style={{ top: `${index * 20}%`, width: 0 }}
                    initial={{ width: 0 }}
                    animate={{ width: '100%' }}
                    exit={{ width: 0 }}
                    transition={{
                      duration: 0.7,
                      delay: index * 0.1,
                      ease: 'easeInOut'
                    }}
                  />
                ))}
              </div>
            )}
          </AnimatePresence>

          {/* Hero Image */}
          <AnimatePresence>
            <motion.img
              key={activeFilter}
              src={heroImages[activeFilter]}
              alt="Featured Photography"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.6, ease: "easeInOut" }}
              className="w-full h-full object-cover object-center"
            />
          </AnimatePresence>
          <div className="absolute inset-0 bg-black/40" />
        </div>

        <div className="relative z-10 flex items-center justify-center h-full">
          <div className="container mx-auto px-4 text-center">
            <motion.h1
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-4xl md:text-6xl font-cormorant font-light mb-6 text-white"
            >
              Captured Stories
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-lg text-white/95 font-inter mb-12 max-w-2xl mx-auto"
            >
              A curated collection of timeless moments and cherished memories
            </motion.p>

            {/* Filter Buttons */}
            <div className="flex flex-wrap justify-center gap-4">
              {filters.map((filter) => (
                <button
                  key={filter}
                  onClick={() => handleFilterChange(filter)}
                  className={`px-6 py-2 font-inter font-medium transition-all duration-300 ${activeFilter === filter
                    ? 'bg-white text-black'
                    : 'border border-white text-white hover:bg-white/20'
                    }`}
                >
                  {filter}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          {activeFilter === 'Video Gallery' ? (
            // Video Grid
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {videos.map((video, index) => (
                <motion.div
                  key={index}
                  layout
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  transition={{ duration: 0.5 }}
                  className="relative group overflow-hidden rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300"
                >
                  <video
                    src={video.src}
                    className="w-full h-64 object-cover"
                    controls
                    playsInline
                    preload="metadata"
                    onMouseEnter={(e) => e.currentTarget.play()}
                    onMouseLeave={(e) => {
                      e.currentTarget.pause();
                      e.currentTarget.currentTime = 0;
                    }}
                  />
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                    <p className="text-white font-inter text-sm">{video.title}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          ) : (
            // Image Grid
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredImages.map((image, index) => (
                <motion.div
                  key={index}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="group cursor-pointer overflow-hidden rounded-lg"
                >
                  <div className="aspect-square overflow-hidden">
                    <img
                      src={image.src}
                      alt={`Gallery Image - ${image.category}`}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                  </div>
                  <div className="mt-4">
                    <p className="text-sm font-inter text-gray-700">{image.category}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default Gallery;
