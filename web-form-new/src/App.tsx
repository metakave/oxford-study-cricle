import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, ArrowLeft, CheckCircle } from 'lucide-react';
import formDataRaw from './form-data.json';

// Type definitions based on our JSON structure
type Question = {
  id: string;
  title: string;
  type: string;
  required: boolean;
  helpText: string;
  options: string[];
};

type Section = {
  title: string;
  description: string;
  questions: Question[];
};

const formData: Section[] = formDataRaw;

export default function App() {
  const [currentSection, setCurrentSection] = useState(0);
  const [answers, setAnswers] = useState<Record<string, any>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  // Initialize with form info section
  const section = formData[currentSection];
  const isLastSection = currentSection === formData.length - 1;
  const progress = ((currentSection + 1) / formData.length) * 100;

  const handleInputChange = (questionId: string, value: any) => {
    setAnswers(prev => ({
      ...prev,
      [questionId]: value
    }));
  };

  const validateCurrentSection = () => {
    // If it's the "FORM INFO" section (which usually has no questions), just return true
    if (!section.questions || section.questions.length === 0) return true;

    for (const q of section.questions) {
      if (q.required) {
        const val = answers[q.id];
        if (val === undefined || val === null || val === '') {
          return false;
        }
        if (Array.isArray(val) && val.length === 0) {
          return false;
        }
      }
    }
    return true;
  };

  const handleNext = () => {
    if (validateCurrentSection()) {
      setCurrentSection(prev => Math.min(prev + 1, formData.length - 1));
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      alert("Please fill in all required fields.");
    }
  };

  const handlePrev = () => {
    setCurrentSection(prev => Math.max(prev - 1, 0));
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSubmit = async () => {
    if (!validateCurrentSection()) {
      alert("Please fill in all required fields.");
      return;
    }
    
    setIsSubmitting(true);
    // Simulate API call
    setTimeout(() => {
      console.log("Form submitted:", answers);
      setIsSubmitting(false);
      setIsSuccess(true);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }, 1500);
  };

  if (isSuccess) {
    return (
      <div className="container">
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="card"
          style={{ textAlign: 'center', padding: '4rem 2rem' }}
        >
          <CheckCircle size={64} color="#10b981" style={{ margin: '0 auto 1.5rem' }} />
          <h1 style={{ fontSize: '2rem', marginBottom: '1rem' }}>Application Received!</h1>
          <p style={{ color: 'var(--text-muted)' }}>
            Thank you for enrolling in the Oxford Study Circle. We will review your application and get back to you soon.
          </p>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="container">
      <div className="progress-bar">
        <div className="progress-inner" style={{ width: `${progress}%` }}></div>
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={currentSection}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -20 }}
          transition={{ duration: 0.3 }}
          className="card"
        >
          <div className="heading">
            <h1>{section.title}</h1>
            {section.description && <p>{section.description}</p>}
          </div>

          <div className="form-content">
            {section.questions && section.questions.map((q) => (
              <div key={q.id} className="form-group">
                <label className="label">
                  {q.id}. {q.title}
                  {q.required && <span className="required">*</span>}
                </label>
                {q.helpText && <div className="help-text">{q.helpText}</div>}

                {/* Text / Short Answer */}
                {q.type === 'Short answer' && (
                  <input
                    type="text"
                    className="input"
                    placeholder="Your answer"
                    value={answers[q.id] || ''}
                    onChange={(e) => handleInputChange(q.id, e.target.value)}
                  />
                )}

                {/* Paragraph */}
                {q.type === 'Paragraph' && (
                  <textarea
                    className="input"
                    rows={4}
                    placeholder="Your answer"
                    value={answers[q.id] || ''}
                    onChange={(e) => handleInputChange(q.id, e.target.value)}
                  />
                )}

                {/* Multiple Choice (Radio) */}
                {q.type === 'Multiple choice' && (
                  <div className="options-grid">
                    {q.options.map((opt, idx) => (
                      <label key={idx} className="option-item">
                        <input
                          type="radio"
                          name={`q_${q.id}`}
                          value={opt}
                          checked={answers[q.id] === opt}
                          onChange={(e) => handleInputChange(q.id, e.target.value)}
                        />
                        {opt}
                      </label>
                    ))}
                  </div>
                )}

                {/* Checkboxes */}
                {q.type === 'Checkboxes' && (
                  <div className="options-grid">
                    {q.options.map((opt, idx) => {
                      const currentAnswers = answers[q.id] || [];
                      return (
                        <label key={idx} className="option-item">
                          <input
                            type="checkbox"
                            checked={currentAnswers.includes(opt)}
                            onChange={(e) => {
                              const checked = e.target.checked;
                              const newAnswers = checked
                                ? [...currentAnswers, opt]
                                : currentAnswers.filter((val: string) => val !== opt);
                              handleInputChange(q.id, newAnswers);
                            }}
                          />
                          {opt}
                        </label>
                      );
                    })}
                  </div>
                )}
              </div>
            ))}
          </div>

          <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '3rem' }}>
            <button
              className="btn btn-secondary"
              onClick={handlePrev}
              disabled={currentSection === 0}
              style={{ opacity: currentSection === 0 ? 0 : 1 }}
            >
              <ArrowLeft size={18} /> Previous
            </button>

            {isLastSection ? (
              <button className="btn" onClick={handleSubmit} disabled={isSubmitting}>
                {isSubmitting ? 'Submitting...' : 'Submit Form'} <CheckCircle size={18} />
              </button>
            ) : (
              <button className="btn" onClick={handleNext}>
                Next <ArrowRight size={18} />
              </button>
            )}
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
