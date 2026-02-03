import { motion } from 'framer-motion';
import { Music, Heart, ExternalLink, Play } from 'lucide-react';

interface Song {
  id: number;
  title: string;
  artist: string;
  note: string;
  spotifyUrl?: string;
}

const PlaylistSection = () => {
  const songs: Song[] = [
    {
      id: 1,
      title: 'Sheesha',
      artist: 'Mitta',
      note: 'In your reflection, I see my truest self.',
      spotifyUrl: 'https://open.spotify.com/track/412poAqbwD8OC0dYD1nBkV?si=ptvMh5DpT32-B08jd7RwSA',
    },
    {
      id: 2,
      title: 'wishes',
      artist: 'talwinder',
      note: 'Every wish I make quietly leads back to you.',
      spotifyUrl: 'https://open.spotify.com/episode/1GHwwmbs5eekm98fJtN0BI?si=2-8ZmyE3SdOJonN2pFOhPw&t=8',
    },
    {
      id: 3,
      title: 'Daylight',
      artist: 'David Kushner',
      note: 'Even the darkest nights feel bright with you around',
      spotifyUrl: 'https://open.spotify.com/track/4Gg1tYCl7rWR4laKbdtPA4?si=99td6vxMSXqYbYfyO0Ggxw',
    },
    {
      id: 4,
      title: 'Zaalima',
      artist: 'Arijit Singh',
      note: 'One look from you was enough to steal my heart.',
      spotifyUrl: 'https://open.spotify.com/track/1J9vyEntJ79CppvgUxJs75?si=ukkE-bqjRQC9M5Ek9GUNzQ',
    },
    {
      id: 5,
      title: 'Humsafar',
      artist: 'Sachet Tandon',
      note: 'With you beside me, every journey feels complete.',
      spotifyUrl: 'https://open.spotify.com/track/0OLTYqD8FpjkLsxJmdWmgi?si=-zb_SIq0TKWHqw5ryYyQPQ',
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <section className="py-20 px-6 bg-sunset min-h-screen">
      <div className="max-w-lg mx-auto">
        {/* Section Header */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-heading flex items-center justify-center gap-3">
            Songs That Feel Like Us
            <Music className="w-7 h-7 text-rose" />
          </h2>
          <p className="font-body text-muted-foreground">
            Every song tells our story
          </p>
        </motion.div>

        {/* Playlist */}
        <motion.div
          className="space-y-4"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
        >
          {songs.map((song, index) => (
            <motion.div
              key={song.id}
              variants={cardVariants}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <a
                href={song.spotifyUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="block glass-card rounded-xl p-5 shadow-soft hover:shadow-romantic transition-shadow group"
              >
                <div className="flex items-start gap-4">
                  {/* Play Icon */}
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-rose to-coral flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                    <Play className="w-5 h-5 text-white fill-white ml-0.5" />
                  </div>

                  {/* Song Info */}
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between gap-2 mb-1">
                      <h3 className="font-serif text-lg font-semibold text-foreground truncate">
                        {song.title}
                      </h3>
                      <ExternalLink className="w-4 h-4 text-muted-foreground flex-shrink-0 opacity-0 group-hover:opacity-100 transition-opacity" />
                    </div>
                    <p className="font-body text-sm text-rose mb-3">{song.artist}</p>
                    <p className="font-body text-sm text-muted-foreground italic leading-relaxed">
                      "{song.note}"
                    </p>
                  </div>
                </div>

                {/* Decorative Heart */}
                <div className="flex justify-end mt-3">
                  <Heart className="w-4 h-4 text-rose/40 fill-rose/40" />
                </div>
              </a>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default PlaylistSection;
