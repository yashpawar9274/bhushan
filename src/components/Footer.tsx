import { motion } from 'framer-motion';
import { Heart } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="py-12 px-6 bg-gradient-to-t from-rose-light to-background">
      <motion.div
        className="max-w-lg mx-auto text-center"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <div className="flex justify-center items-center gap-2 mb-4">
          <motion.div whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.9 }}>
            <Heart className="w-5 h-5 text-rose fill-rose animate-heart-beat" />
          </motion.div>
          <motion.div whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.9 }}>
            <Heart className="w-7 h-7 text-rose-dark fill-rose-dark animate-heart-beat" style={{ animationDelay: '0.3s' }} />
          </motion.div>
          <motion.div whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.9 }}>
            <Heart className="w-5 h-5 text-rose fill-rose animate-heart-beat" style={{ animationDelay: '0.6s' }} />
          </motion.div>
        </div>
        <motion.p 
          className="font-script text-2xl text-rose-dark mb-2"
          whileHover={{ scale: 1.05 }}
        >
          Forever Yours
        </motion.p>
        <p className="font-body text-sm text-muted-foreground mb-4">
          Made with love, just for you 💕
        </p>
        <motion.p 
          className="font-body text-xs text-muted-foreground/70"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          Made by Bhushan 
          
        </motion.p>
      </motion.div>
    </footer>
  );
};

export default Footer;
