import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface TimelineItemProps {
  year: string;
  title: string;
  description: string;
  image?: string; // Nueva propiedad
  delay?: number;
}

export const TimelineItem: React.FC<TimelineItemProps> = ({ year, title, description, image, delay = 0 }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Evento en la línea */}
      <motion.div
        className="relative flex flex-col md:flex-row items-start pl-6 border-l-2 border-gray-300 mb-8 cursor-pointer gap-4"
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, delay }}
        viewport={{ once: true }}
        onClick={() => setIsOpen(true)}
      >
        <div className="absolute -left-[11px] top-1 w-5 h-5 rounded-full bg-blue-600 border-2 border-white shadow-md" />
        
        {image && (
          <img 
            src={image} 
            alt={title} 
            className="w-20 h-20 object-cover rounded-full shadow-md"
          />
        )}

        <div className="bg-white p-4 rounded-2xl shadow-md hover:shadow-lg transition max-w-lg">
          <h3 className="text-lg font-bold text-blue-700">{year} — {title}</h3>
          <p className="text-gray-600 mt-2 text-sm">{description.slice(0, 60)}...</p>
        </div>
      </motion.div>

      {/* Modal */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50 p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsOpen(false)}
          >
            <motion.div
              className="bg-white p-6 rounded-xl max-w-md w-full max-h-[80vh] overflow-y-auto shadow-lg"
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
              onClick={(e) => e.stopPropagation()}
            >
              {image && (
                <img 
                  src={image} 
                  alt={title} 
                  className="w-full h-40 object-cover rounded-lg mb-4"
                />
              )}
              <h2 className="text-xl font-bold mb-4 text-blue-700">{year} — {title}</h2>
              <p className="text-gray-700">{description}</p>
              <button
                className="mt-4 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
                onClick={() => setIsOpen(false)}
              >
                Cerrar
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
