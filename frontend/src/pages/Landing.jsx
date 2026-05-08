import React from 'react';
import { motion } from 'framer-motion';
import { Zap, Map, Shield, CalendarDays, Cloud, Smartphone } from 'lucide-react';
import Login from '../components/Login';

const fadeUpVariant = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
};

export default function Landing({ onLoginSuccess }) {
  return (
    <main style={{ paddingBottom: '6rem' }}>
      {/* Hero Section */}
      <section style={{ 
        minHeight: '80vh', 
        display: 'flex', 
        flexDirection: 'column', 
        justifyContent: 'center', 
        alignItems: 'center',
        textAlign: 'center',
        paddingTop: '4rem'
      }}>
        <motion.div
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
          style={{ maxWidth: '800px' }}
        >
          <motion.div variants={fadeUpVariant} style={{ marginBottom: '1.5rem' }}>
            <span style={{ 
              background: 'rgba(255,255,255,0.05)', 
              border: '1px solid rgba(255,255,255,0.1)', 
              padding: '6px 12px', 
              borderRadius: '20px',
              fontSize: '0.85rem',
              fontWeight: '500',
              color: '#ccc'
            }}>
              Powered by Gemini 2.0 Flash ✨
            </span>
          </motion.div>
          
          <motion.h1 variants={fadeUpVariant} style={{ 
            fontSize: 'clamp(3rem, 8vw, 5.5rem)', 
            fontWeight: '800', 
            lineHeight: '1.1',
            letterSpacing: '-0.03em',
            marginBottom: '1.5rem',
            background: 'linear-gradient(180deg, #FFFFFF 0%, #A0A0A0 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent'
          }}>
            Travel planning,<br/>automated.
          </motion.h1>
          
          <motion.p variants={fadeUpVariant} style={{ 
            fontSize: '1.25rem', 
            color: '#888', 
            maxWidth: '600px', 
            margin: '0 auto 3rem auto',
            lineHeight: '1.6'
          }}>
            Input your budget and constraints. Our AI engine crafts the perfect day-by-day itinerary and dynamically replans when the real world gets in the way.
          </motion.p>
          
          <motion.div variants={fadeUpVariant}>
            <Login onLoginSuccess={onLoginSuccess} />
          </motion.div>
        </motion.div>
      </section>

      {/* UI Demo Window */}
      <motion.section 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={fadeUpVariant}
        style={{ 
          display: 'flex', 
          justifyContent: 'center',
          marginTop: '-4rem',
          position: 'relative',
          zIndex: 10
        }}
      >
        <div style={{
          width: '100%',
          maxWidth: '1000px',
          background: '#0a0a0a',
          border: '1px solid rgba(255,255,255,0.1)',
          borderRadius: '12px',
          boxShadow: '0 24px 64px rgba(0,0,0,0.6)',
          overflow: 'hidden'
        }}>
          {/* Fake Browser Header */}
          <div style={{ 
            display: 'flex', 
            gap: '8px', 
            padding: '12px 16px', 
            borderBottom: '1px solid rgba(255,255,255,0.05)',
            background: '#111'
          }}>
            <div style={{ width: '12px', height: '12px', borderRadius: '50%', background: '#ff5f56' }} />
            <div style={{ width: '12px', height: '12px', borderRadius: '50%', background: '#ffbd2e' }} />
            <div style={{ width: '12px', height: '12px', borderRadius: '50%', background: '#27c93f' }} />
          </div>
          {/* Fake Dashboard Content */}
          <div style={{ padding: '2rem', display: 'grid', gridTemplateColumns: '1fr 2fr', gap: '2rem', opacity: 0.7 }}>
            <div style={{ background: '#111', borderRadius: '8px', padding: '1rem', height: '300px' }}>
              <div style={{ height: '20px', width: '50%', background: '#222', borderRadius: '4px', marginBottom: '2rem' }} />
              <div style={{ height: '40px', width: '100%', background: '#222', borderRadius: '4px', marginBottom: '1rem' }} />
              <div style={{ height: '40px', width: '100%', background: '#222', borderRadius: '4px', marginBottom: '1rem' }} />
              <div style={{ height: '40px', width: '100%', background: '#333', borderRadius: '4px' }} />
            </div>
            <div style={{ background: '#111', borderRadius: '8px', padding: '1rem' }}>
               <div style={{ height: '100%', width: '100%', background: '#1a1a1a', borderRadius: '4px', border: '1px dashed #333', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                 <Map size={48} color="#333" />
               </div>
            </div>
          </div>
        </div>
      </motion.section>

      {/* Tech Stack / Social Proof */}
      <section style={{ padding: '6rem 0 4rem 0', textAlign: 'center', borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
        <p style={{ color: '#666', fontSize: '0.9rem', fontWeight: '500', textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '2rem' }}>
          Built with cutting-edge technology
        </p>
        <div style={{ display: 'flex', justifyContent: 'center', gap: '4rem', flexWrap: 'wrap', opacity: 0.5, filter: 'grayscale(100%)' }}>
          {/* Placeholder text for logos since we don't have SVGs */}
          <span style={{ fontSize: '1.2rem', fontWeight: '700' }}>Google Cloud</span>
          <span style={{ fontSize: '1.2rem', fontWeight: '700' }}>Firebase</span>
          <span style={{ fontSize: '1.2rem', fontWeight: '700' }}>Gemini AI</span>
          <span style={{ fontSize: '1.2rem', fontWeight: '700' }}>Google Maps</span>
        </div>
      </section>

      {/* Bento Box Features */}
      <section style={{ paddingTop: '6rem' }}>
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          style={{ textAlign: 'center', marginBottom: '4rem' }}
        >
          <motion.h2 variants={fadeUpVariant} style={{ fontSize: '2.5rem', marginBottom: '1rem', fontWeight: '700' }}>
            Everything you need for the perfect trip.
          </motion.h2>
          <motion.p variants={fadeUpVariant} style={{ color: '#888', maxWidth: '500px', margin: '0 auto' }}>
            A powerful orchestrator that handles APIs, weather data, and strict constraints so you don't have to.
          </motion.p>
        </motion.div>

        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', 
          gap: '1.5rem',
          maxWidth: '1000px',
          margin: '0 auto'
        }}>
          {/* Feature 1 */}
          <motion.div 
            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUpVariant}
            className="glass-panel"
            style={{ display: 'flex', flexDirection: 'column', justifyContent: 'flex-end', minHeight: '250px' }}
          >
            <Zap size={32} color="#fff" style={{ marginBottom: '1.5rem' }} />
            <h3 style={{ fontSize: '1.2rem', marginBottom: '0.5rem' }}>Context-Aware AI</h3>
            <p style={{ color: '#888', fontSize: '0.95rem', lineHeight: '1.5' }}>
              Gemini understands complex constraints like dietary needs and strict budgets before planning.
            </p>
          </motion.div>

          {/* Feature 2 */}
          <motion.div 
            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUpVariant}
            className="glass-panel"
            style={{ display: 'flex', flexDirection: 'column', justifyContent: 'flex-end', minHeight: '250px' }}
          >
            <Cloud size={32} color="#fff" style={{ marginBottom: '1.5rem' }} />
            <h3 style={{ fontSize: '1.2rem', marginBottom: '0.5rem' }}>Real-Time Adaptation</h3>
            <p style={{ color: '#888', fontSize: '0.95rem', lineHeight: '1.5' }}>
              Weather turned bad? The engine automatically swaps outdoor activities for indoor alternatives.
            </p>
          </motion.div>

          {/* Feature 3 */}
          <motion.div 
            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUpVariant}
            className="glass-panel"
            style={{ gridColumn: '1 / -1', display: 'flex', alignItems: 'center', gap: '3rem', padding: '3rem' }}
          >
            <div style={{ flex: 1 }}>
              <Shield size={32} color="#fff" style={{ marginBottom: '1.5rem' }} />
              <h3 style={{ fontSize: '1.5rem', marginBottom: '0.5rem' }}>Enterprise Security</h3>
              <p style={{ color: '#888', fontSize: '1rem', lineHeight: '1.5' }}>
                Your data is secured using Google Cloud Secret Manager and robust input validation. Safe, private, and fully compliant.
              </p>
            </div>
            <div style={{ flex: 1, background: '#111', borderRadius: '8px', padding: '1.5rem', border: '1px solid #222' }}>
               <pre style={{ color: '#0f0', fontSize: '0.8rem', margin: 0, fontFamily: 'monospace' }}>
{`{
  "status": "secured",
  "auth": "firebase",
  "encryption": "aes-256",
  "rateLimit": "100/min"
}`}
               </pre>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
