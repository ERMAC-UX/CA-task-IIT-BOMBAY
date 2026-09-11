import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, CheckCircle, ShieldCheck } from 'lucide-react';
import { DISCIPLINES, COMPETITIONS, Discipline, Competition, ExperienceChapter } from '../data/techfestData';
import { sound } from '../utils/audioSynth';

interface RegistrationModalProps {
  isOpen: boolean;
  onClose: () => void;
  selectedDiscipline?: Discipline | null;
  selectedCompetition?: Competition | null;
  selectedChapter?: ExperienceChapter | null;
}

export const RegistrationModal: React.FC<RegistrationModalProps> = ({
  isOpen,
  onClose,
  selectedDiscipline,
  selectedCompetition,
  selectedChapter,
}) => {
  const [activeTab, setActiveTab] = useState<'register' | 'dossier'>(
    selectedDiscipline || selectedCompetition || selectedChapter ? 'dossier' : 'register'
  );

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    institution: '',
    discipline: selectedDiscipline?.name || 'ARTIFICIAL INTELLIGENCE',
    role: 'Competitor / Scholar',
    teamSize: 'Single Inventor',
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    sound.playChord();
    setIsSubmitted(true);
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-[100000] flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-charcoal-950/85 backdrop-blur-md"
        />

        {/* Modal Container */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 15 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 15 }}
          transition={{ duration: 0.3, ease: 'easeOut' }}
          className="relative w-full max-w-2xl bg-charcoal-900 border-2 border-gold-500/40 rounded-sm shadow-2xl p-6 sm:p-10 my-8 z-10 overflow-hidden"
        >
          {/* Florentine corner flourishes */}
          <div className="absolute top-2 left-2 text-xs text-gold-400 font-serif">✦</div>
          <div className="absolute top-2 right-2 text-xs text-gold-400 font-serif">✦</div>
          <div className="absolute bottom-2 left-2 text-xs text-gold-400 font-serif">✦</div>
          <div className="absolute bottom-2 right-2 text-xs text-gold-400 font-serif">✦</div>

          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-2 text-parchment-400 hover:text-gold-300 transition-colors border border-gold-500/20 hover:border-gold-400 rounded"
          >
            <X size={16} />
          </button>

          {/* Modal Tab Controls if a dossier item was selected */}
          {(selectedDiscipline || selectedCompetition || selectedChapter) && (
            <div className="flex space-x-2 border-b border-gold-500/20 pb-4 mb-6">
              <button
                onClick={() => setActiveTab('dossier')}
                className={`px-4 py-1.5 font-mono text-xs uppercase tracking-wider transition-colors ${
                  activeTab === 'dossier'
                    ? 'border-b-2 border-gold-400 text-gold-300 font-bold'
                    : 'text-parchment-400 hover:text-parchment-200'
                }`}
              >
                FOLIO DOSSIER
              </button>
              <button
                onClick={() => setActiveTab('register')}
                className={`px-4 py-1.5 font-mono text-xs uppercase tracking-wider transition-colors ${
                  activeTab === 'register'
                    ? 'border-b-2 border-gold-400 text-gold-300 font-bold'
                    : 'text-parchment-400 hover:text-parchment-200'
                }`}
              >
                ACCREDITATION
              </button>
            </div>
          )}

          {/* Tab 1: Dossier View (if triggered from item) */}
          {activeTab === 'dossier' && (selectedDiscipline || selectedCompetition || selectedChapter) ? (
            <div className="space-y-6">
              {selectedDiscipline && (
                <div className="space-y-4">
                  <div className="flex items-center justify-between text-xs font-mono text-parchment-400">
                    <span>DISCIPLINE ARCHIVE // {selectedDiscipline.latinName}</span>
                    <span className="text-gold-400">{selectedDiscipline.symbol}</span>
                  </div>
                  <h3 className="font-serif text-3xl font-bold uppercase text-parchment-100">
                    {selectedDiscipline.name}
                  </h3>
                  <p className="font-mono text-xs text-gold-300">
                    {selectedDiscipline.tagline}
                  </p>
                  <p className="font-manuscript text-base text-parchment-200 leading-relaxed">
                    {selectedDiscipline.description}
                  </p>
                  <div className="p-4 bg-charcoal-950 border border-gold-500/20 rounded font-mono text-xs text-gold-300">
                    <div>MATHEMATICAL FOUNDATION:</div>
                    <div className="mt-1 text-parchment-100">{selectedDiscipline.equation}</div>
                  </div>
                </div>
              )}

              {selectedCompetition && (
                <div className="space-y-4">
                  <div className="flex items-center justify-between text-xs font-mono text-parchment-400">
                    <span>FLAGSHIP CHALLENGE // {selectedCompetition.category}</span>
                    <span className="text-crimson-500 font-bold">{selectedCompetition.difficulty}</span>
                  </div>
                  <h3 className="font-serif text-3xl font-bold uppercase text-parchment-100">
                    {selectedCompetition.title}
                  </h3>
                  <div className="font-serif text-2xl text-gold-300 font-bold">
                    Prize Purse: {selectedCompetition.prizePool}
                  </div>
                  <p className="font-mono text-xs text-parchment-300 leading-relaxed">
                    {selectedCompetition.description}
                  </p>
                  <div className="space-y-2 pt-2 border-t border-gold-500/20">
                    <span className="font-mono text-[11px] text-gold-400 uppercase">SPECIFICATIONS:</span>
                    {selectedCompetition.specs.map((s, i) => (
                      <div key={i} className="text-xs font-mono text-parchment-300 flex items-center space-x-2">
                        <span className="text-gold-500">✦</span>
                        <span>{s}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {selectedChapter && (
                <div className="space-y-4">
                  <div className="flex items-center justify-between text-xs font-mono text-parchment-400">
                    <span>{selectedChapter.chapter} // {selectedChapter.plateNumber}</span>
                    <span className="text-gold-400">{selectedChapter.venue}</span>
                  </div>
                  <h3 className="font-serif text-3xl font-bold uppercase text-parchment-100">
                    {selectedChapter.title}
                  </h3>
                  <p className="font-mono text-xs text-gold-300">
                    {selectedChapter.subheading}
                  </p>
                  <p className="font-manuscript text-base text-parchment-200 leading-relaxed">
                    {selectedChapter.description}
                  </p>
                  <blockquote className="border-l-2 border-gold-500 pl-4 py-1 italic font-manuscript text-sm text-gold-300">
                    {selectedChapter.renaissanceQuote}
                  </blockquote>
                </div>
              )}

              <div className="pt-4 border-t border-gold-500/20">
                <button
                  onClick={() => setActiveTab('register')}
                  className="w-full py-3 bg-gold-500 hover:bg-gold-400 text-charcoal-950 font-serif text-xs tracking-[0.2em] font-bold uppercase transition-colors"
                >
                  PROCEED TO ACCREDITATION →
                </button>
              </div>
            </div>
          ) : (
            /* Tab 2: Registration Dossier Form */
            <div>
              {!isSubmitted ? (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div>
                    <div className="flex items-center space-x-2 text-[10px] font-mono tracking-[0.25em] text-crimson-500 uppercase mb-1">
                      <span>FOLIO ACCREDITATION MMXXVI</span>
                      <span>•</span>
                      <span>TECHFEST 2026</span>
                    </div>
                    <h3 className="font-serif text-2xl sm:text-3xl font-black uppercase text-parchment-100">
                      CLAIM YOUR INVENTOR’S ENTRY
                    </h3>
                    <p className="font-mono text-xs text-parchment-400 mt-1">
                      Registered scholars gain access to all 300+ events, lectures, and competitions at IIT Bombay.
                    </p>
                  </div>

                  <div className="space-y-4 pt-2">
                    <div>
                      <label className="block text-xs font-mono tracking-wider text-parchment-300 mb-1.5 uppercase">
                        FULL NAME / SCHOLAR TITLE
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="e.g. Leonardo Alighieri"
                        className="w-full px-4 py-2.5 bg-charcoal-950 border border-gold-500/30 rounded focus:border-gold-400 text-parchment-100 font-mono text-xs focus:outline-none"
                      />
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-mono tracking-wider text-parchment-300 mb-1.5 uppercase">
                          OFFICIAL ACADEMIC EMAIL
                        </label>
                        <input
                          type="email"
                          required
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          placeholder="scholar@institute.edu"
                          className="w-full px-4 py-2.5 bg-charcoal-950 border border-gold-500/30 rounded focus:border-gold-400 text-parchment-100 font-mono text-xs focus:outline-none"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-mono tracking-wider text-parchment-300 mb-1.5 uppercase">
                          UNIVERSITY / INSTITUTION
                        </label>
                        <input
                          type="text"
                          required
                          value={formData.institution}
                          onChange={(e) => setFormData({ ...formData, institution: e.target.value })}
                          placeholder="e.g. IIT Bombay / MIT"
                          className="w-full px-4 py-2.5 bg-charcoal-950 border border-gold-500/30 rounded focus:border-gold-400 text-parchment-100 font-mono text-xs focus:outline-none"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-mono tracking-wider text-parchment-300 mb-1.5 uppercase">
                          PRIMARY DISCIPLINE OF INQUIRY
                        </label>
                        <select
                          value={formData.discipline}
                          onChange={(e) => setFormData({ ...formData, discipline: e.target.value })}
                          className="w-full px-4 py-2.5 bg-charcoal-950 border border-gold-500/30 rounded focus:border-gold-400 text-parchment-100 font-mono text-xs focus:outline-none"
                        >
                          {DISCIPLINES.map((d) => (
                            <option key={d.id} value={d.name}>
                              {d.name}
                            </option>
                          ))}
                        </select>
                      </div>

                      <div>
                        <label className="block text-xs font-mono tracking-wider text-parchment-300 mb-1.5 uppercase">
                          TEAM FORMATION
                        </label>
                        <select
                          value={formData.teamSize}
                          onChange={(e) => setFormData({ ...formData, teamSize: e.target.value })}
                          className="w-full px-4 py-2.5 bg-charcoal-950 border border-gold-500/30 rounded focus:border-gold-400 text-parchment-100 font-mono text-xs focus:outline-none"
                        >
                          <option value="Single Inventor">Solo Inventor</option>
                          <option value="Duo (2 Scholars)">Duo (2 Scholars)</option>
                          <option value="Syndicate (3–6 Engineers)">Syndicate (3–6 Engineers)</option>
                          <option value="Delegation Observer">Academic Observer / Faculty</option>
                        </select>
                      </div>
                    </div>
                  </div>

                  <div className="pt-4 border-t border-gold-500/20">
                    <button
                      type="submit"
                      className="w-full py-4 bg-gradient-to-r from-gold-500 to-gold-600 hover:from-gold-400 hover:to-gold-500 text-charcoal-950 font-serif text-xs tracking-[0.25em] font-bold uppercase transition-all duration-300 shadow-[0_0_20px_rgba(197,168,105,0.25)] flex items-center justify-center space-x-2"
                    >
                      <ShieldCheck size={16} />
                      <span>AFFIX SEAL & ENTER THE RENAISSANCE</span>
                    </button>
                  </div>
                </form>
              ) : (
                /* Success Accreditation State */
                <div className="py-8 text-center space-y-6">
                  <div className="w-16 h-16 mx-auto rounded-full border-2 border-gold-400 bg-gold-500/10 flex items-center justify-center text-gold-300">
                    <CheckCircle size={32} />
                  </div>

                  <div className="space-y-2">
                    <h3 className="font-serif text-3xl font-bold uppercase text-parchment-100">
                      ACCREDITATION SEALED
                    </h3>
                    <p className="font-manuscript italic text-lg text-gold-400">
                      Welcome to the 30th Edition, {formData.name || 'Scholar'}.
                    </p>
                    <p className="font-mono text-xs text-parchment-300 max-w-md mx-auto leading-relaxed pt-2">
                      Your entry dossier has been recorded in the Techfest 2026 registry under <span className="text-parchment-100 font-semibold">{formData.discipline}</span>. Coordinates dispatched to <span className="text-gold-300">{formData.email}</span>.
                    </p>
                  </div>

                  <div className="p-4 bg-charcoal-950 border border-gold-500/25 max-w-sm mx-auto rounded font-mono text-xs text-parchment-400 space-y-1 text-left">
                    <div className="text-gold-400 font-bold">DOSSIER REGISTRATION CODE:</div>
                    <div className="text-parchment-100 text-sm font-semibold tracking-widest">TF26-RENAISSANCE-779X</div>
                    <div>VENUE: IIT BOMBAY, POWAI, MUMBAI</div>
                    <div>DATES: 16—18 DECEMBER 2026</div>
                  </div>

                  <button
                    onClick={onClose}
                    className="px-8 py-3 border border-gold-400 text-gold-300 font-serif text-xs tracking-[0.2em] uppercase hover:bg-gold-500/20 transition-colors"
                  >
                    RETURN TO MANUSCRIPT
                  </button>
                </div>
              )}
            </div>
          )}
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
