import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, Send, ShieldCheck, Users } from 'lucide-react';
import SectionEyebrow from '../components/SectionEyebrow';
import NetworkBackground from '../components/NetworkBackground';

const BRANCHES = [
  'Computer Science',
  'ECE',
  'Mechanical',
  'Chemical',
  'Material Science',
  'MnC (Mathematics & Computing)',
  'Architecture'
];

const createParticipant = () => ({
  fullName: '',
  rollNumber: '',
  email: '',
  branch: BRANCHES[0]
});

const createFormData = () => ({
  participationMode: 'individual',
  teamName: '',
  participant1: createParticipant(),
  participant2: createParticipant(),
  rulesAccepted: false
});

const PARTICIPANT_FIELDS = [
  { name: 'fullName', label: 'Full Name', type: 'text', placeholder: 'e.g., Rohit Kumar' },
  { name: 'rollNumber', label: 'Roll Number', type: 'text', placeholder: 'e.g., 26BCSE042' },
  { name: 'email', label: 'College Email', type: 'email', placeholder: 'name@nith.ac.in' }
];

export default function JoinUs() {
  const [formData, setFormData] = useState(createFormData);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const isDuo = formData.participationMode === 'duo';
  const participants = isDuo
    ? [formData.participant1, formData.participant2]
    : [formData.participant1];

  const updateParticipant = (participantKey, field, value) => {
    setFormData((current) => ({
      ...current,
      [participantKey]: { ...current[participantKey], [field]: value }
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setFormSubmitted(true);
    }, 800);
  };

  return (
    <div className="relative overflow-hidden bg-shield-bgLight">
      <section className="relative overflow-hidden border-b border-shield-border bg-white py-12 md:py-16">
        <NetworkBackground />
        <div className="relative z-10 mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
          <SectionEyebrow text="WORKSHOP & CTF REGISTRATION · 1ST YEAR" center={true} />
          <h1 className="mb-3 font-heading text-3xl font-black text-navy-800 sm:text-4xl">
            Workshop &amp; CTF Registration
          </h1>
          <p className="mx-auto max-w-xl text-sm leading-relaxed text-shield-mutedText sm:text-base">
            Register as an individual or with a teammate. This form is for first-year students only.
          </p>
        </div>
      </section>

      <section className="px-4 py-10 sm:px-6 sm:py-14 lg:px-8">
        <div className="mx-auto max-w-3xl">
          <div className="relative rounded-xl border border-shield-border border-t-4 border-t-accent-blue bg-white p-5 shadow-card sm:p-8">
            <div className="mb-7 flex items-center justify-between gap-4 border-b border-shield-border pb-5">
              <div>
                <span className="text-[10px] font-bold uppercase tracking-widest text-accent-blue">
                  OFFICIAL REGISTRATION
                </span>
                <h2 className="mt-1 font-heading text-2xl font-bold text-navy-800">Apply</h2>
              </div>
              <span className="shrink-0 rounded-full border border-emerald-500/20 bg-emerald-500/10 px-3 py-1 text-xs font-bold text-emerald-700">
                1st Year Only
              </span>
            </div>

            {formSubmitted ? (
              <motion.div
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                className="space-y-4 py-6 text-center"
              >
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full border border-emerald-500/20 bg-emerald-500/10 text-emerald-600">
                  <ShieldCheck className="h-8 w-8" />
                </div>
                <h3 className="font-heading text-xl font-bold text-navy-800">
                  Registration Form Complete
                </h3>
                <p className="text-sm leading-relaxed text-shield-mutedText">
                  Thank you, {participants.map((participant) => participant.fullName).join(' and ')}.
                  {' '}This frontend preview does not send or store your registration details.
                </p>
                <button
                  type="button"
                  onClick={() => {
                    setFormData(createFormData());
                    setFormSubmitted(false);
                  }}
                  className="mt-2 rounded-full bg-navy-800 px-6 py-2.5 text-xs font-bold uppercase tracking-wider text-white transition-colors hover:bg-navy-900"
                >
                  Register Another Team
                </button>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-7">
                <fieldset>
                  <legend className="mb-3 text-xs font-bold uppercase tracking-wider text-navy-800">
                    Participation Mode <span className="text-accent-blue">*</span>
                  </legend>
                  <div className="grid grid-cols-2 gap-3">
                    {[
                      { value: 'individual', label: 'Individual' },
                      { value: 'duo', label: 'Duo Team' }
                    ].map((mode) => (
                      <label
                        key={mode.value}
                        className={`flex cursor-pointer items-center gap-3 rounded-lg border px-4 py-3 text-sm font-semibold transition-colors ${
                          formData.participationMode === mode.value
                            ? 'border-accent-blue bg-accent-blue/5 text-navy-800'
                            : 'border-shield-border text-shield-mutedText hover:border-accent-blue/50'
                        }`}
                      >
                        <input
                          type="radio"
                          name="participationMode"
                          value={mode.value}
                          checked={formData.participationMode === mode.value}
                          onChange={() => setFormData((current) => ({
                            ...current,
                            participationMode: mode.value
                          }))}
                          className="h-4 w-4 accent-accent-blue"
                        />
                        {mode.label}
                      </label>
                    ))}
                  </div>
                </fieldset>

                <div>
                  <label htmlFor="teamName" className="mb-1.5 block text-xs font-bold uppercase tracking-wider text-navy-800">
                    Team Name {isDuo ? <span className="text-accent-blue">*</span> : <span className="font-medium normal-case tracking-normal text-shield-mutedText">(optional for individual)</span>}
                  </label>
                  <input
                    id="teamName"
                    type="text"
                    required={isDuo}
                    value={formData.teamName}
                    onChange={(event) => setFormData((current) => ({ ...current, teamName: event.target.value }))}
                    placeholder={isDuo ? 'Choose a CTF team name' : 'Optional CTF team name'}
                    className="w-full rounded-lg border border-shield-border px-3.5 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-accent-blue"
                  />
                </div>

                {[
                  { key: 'participant1', label: 'Participant 1', data: formData.participant1 },
                  ...(isDuo ? [{ key: 'participant2', label: 'Participant 2', data: formData.participant2 }] : [])
                ].map((participant, index) => (
                  <fieldset key={participant.key} className="space-y-4 border-t border-shield-border pt-6">
                    <legend className="flex items-center gap-2 pr-2 font-heading text-base font-bold text-navy-800">
                      {isDuo && index === 1 ? <Users className="h-4 w-4 text-accent-blue" /> : null}
                      {participant.label} Details
                    </legend>
                    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                      {PARTICIPANT_FIELDS.map((field) => (
                        <div key={field.name}>
                          <label htmlFor={`${participant.key}-${field.name}`} className="mb-1.5 block text-xs font-bold uppercase tracking-wider text-navy-800">
                            {field.label} <span className="text-accent-blue">*</span>
                          </label>
                          <input
                            id={`${participant.key}-${field.name}`}
                            type={field.type}
                            required
                            autoComplete={field.name === 'fullName' ? 'name' : field.name === 'email' ? 'email' : 'off'}
                            value={participant.data[field.name]}
                            onChange={(event) => updateParticipant(participant.key, field.name, event.target.value)}
                            placeholder={field.placeholder}
                            className="w-full rounded-lg border border-shield-border px-3.5 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-accent-blue"
                          />
                        </div>
                      ))}
                      <div>
                        <label htmlFor={`${participant.key}-branch`} className="mb-1.5 block text-xs font-bold uppercase tracking-wider text-navy-800">
                          Branch <span className="text-accent-blue">*</span>
                        </label>
                        <select
                          id={`${participant.key}-branch`}
                          required
                          value={participant.data.branch}
                          onChange={(event) => updateParticipant(participant.key, 'branch', event.target.value)}
                          className="w-full rounded-lg border border-shield-border bg-white px-3.5 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-accent-blue"
                        >
                          {BRANCHES.map((branch) => <option key={branch} value={branch}>{branch}</option>)}
                        </select>
                      </div>
                    </div>
                  </fieldset>
                ))}

                <div className="border-t border-shield-border pt-6">
                  <label className="flex cursor-pointer items-start gap-3 rounded-lg border border-shield-border bg-shield-bgLight p-4">
                    <input
                      type="checkbox"
                      required
                      checked={formData.rulesAccepted}
                      onChange={(event) => setFormData((current) => ({
                        ...current,
                        rulesAccepted: event.target.checked
                      }))}
                      className="mt-0.5 h-4 w-4 shrink-0 accent-accent-blue"
                    />
                    <span className="text-sm leading-relaxed text-shield-darkText">
                      I hereby agree to adhere strictly to all rules and regulations of the workshop and CTF challenge. I understand that any misconduct or violation of guidelines will result in immediate disqualification.
                    </span>
                  </label>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="flex w-full items-center justify-center gap-2 rounded-full bg-navy-800 py-3.5 font-heading text-xs font-bold uppercase tracking-wider text-white shadow-md transition-all hover:bg-navy-900 disabled:opacity-70"
                >
                  {isSubmitting ? <span>Submitting Registration...</span> : <>
                    <span>Submit Registration</span>
                    <Send className="h-3.5 w-3.5 text-shield-gold" />
                  </>}
                </button>
                <p className="flex items-center justify-center gap-1.5 text-xs text-shield-mutedText">
                  <CheckCircle2 className="h-3.5 w-3.5 text-accent-blue" />
                  All fields are required unless marked optional.
                </p>
              </form>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}