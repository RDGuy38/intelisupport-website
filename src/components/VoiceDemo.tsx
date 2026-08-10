import { useState, useEffect, useRef } from 'react';
import { Play, Pause, Volume2, Phone } from 'lucide-react';
import { voices, demoConversation } from '../data';

export default function VoiceDemo() {
  const [activeVoice, setActiveVoice] = useState(0);
  const [playing, setPlaying] = useState(false);
  const [visibleMessages, setVisibleMessages] = useState(0);
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    if (playing && visibleMessages < demoConversation.length) {
      timerRef.current = setTimeout(() => setVisibleMessages((v) => v + 1), 1400);
    } else if (visibleMessages >= demoConversation.length) {
      setPlaying(false);
    }
    return () => { if (timerRef.current) clearTimeout(timerRef.current); };
  }, [playing, visibleMessages]);

  const togglePlay = () => {
    if (visibleMessages >= demoConversation.length) setVisibleMessages(0);
    setPlaying(!playing);
  };

  return (
    <section id="demo" className="py-20 lg:py-28 bg-white">
      <div className="container-x">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="section-eyebrow mb-4"><Volume2 className="w-4 h-4" />Live Demo</div>
          <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">Don't take our word for it. Hear it for yourself.</h2>
          <p className="text-lg text-slate-600">Call our toll-free number and talk to the same AI receptionist your customers will, or sign up free and point it at your own number in two minutes.</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
          <div className="card p-6 lg:p-8">
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary-600 to-accent-500 flex items-center justify-center text-white"><Phone className="w-5 h-5" /></div>
                <div>
                  <p className="font-semibold text-slate-800 text-sm">Maple Plumbing</p>
                  <p className="text-xs text-slate-400">Live call transcript</p>
                </div>
              </div>
              <button onClick={togglePlay} className="flex items-center gap-2 px-4 py-2 rounded-lg bg-primary-600 text-white text-sm font-medium hover:bg-primary-700 transition-colors">
                {playing ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
                {playing ? 'Pause' : visibleMessages > 0 ? 'Replay' : 'Play'}
              </button>
            </div>

            <div className="space-y-3 min-h-[320px]">
              {demoConversation.slice(0, visibleMessages).map((msg, i) => (
                <div key={i} className={`flex ${msg.speaker === 'caller' ? 'justify-end' : 'justify-start'} animate-slide-in-right`}>
                  <div className={`px-4 py-2.5 rounded-2xl text-sm max-w-[85%] ${msg.speaker === 'caller' ? 'bg-primary-600 text-white rounded-tr-sm' : 'bg-slate-100 text-slate-700 rounded-tl-sm'}`}>
                    {msg.text}
                  </div>
                </div>
              ))}
              {visibleMessages === 0 && (
                <div className="flex items-center justify-center h-64 text-slate-400 text-sm">Press play to see the conversation</div>
              )}
              {playing && visibleMessages < demoConversation.length && (
                <div className="flex items-center gap-1.5 text-slate-400 text-sm pl-2">
                  <div className="flex gap-1">
                    {[0, 1, 2].map((i) => (
                      <div key={i} className="w-2 h-2 rounded-full bg-slate-300 animate-bounce" style={{ animationDelay: `${i * 0.15}s` }} />
                    ))}
                  </div>
                </div>
              )}
            </div>

            <div className="mt-6 pt-4 border-t border-slate-100 flex items-center gap-2 text-sm text-slate-500">
              <span className="text-xs px-2 py-1 rounded-md bg-primary-50 text-primary-700 font-medium">Scenario</span>
              <span>New customer booking a service call</span>
            </div>
          </div>

          <div className="card p-6 lg:p-8">
            <h3 className="text-lg font-bold text-slate-900 mb-2">Choose the voice your customers hear.</h3>
            <p className="text-sm text-slate-500 mb-6">Every InteliCall account starts with a roster of pre-trained agents. Tap play to preview — then pick one during signup and tweak the script, greeting, and transfer rules in minutes.</p>

            <div className="space-y-3">
              {voices.map((voice, i) => (
                <button key={voice.name} onClick={() => setActiveVoice(i)} className={`w-full text-left p-4 rounded-xl border-2 transition-all duration-200 ${activeVoice === i ? 'border-primary-500 bg-primary-50/50 shadow-md' : 'border-slate-200 hover:border-primary-200 hover:bg-slate-50'}`}>
                  <div className="flex items-center gap-4">
                    <div className={`w-12 h-12 rounded-full bg-gradient-to-br ${voice.color} flex items-center justify-center text-white font-bold text-lg flex-shrink-0`}>{voice.name[0]}</div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2">
                        <span className="font-semibold text-slate-800">{voice.name}</span>
                        <span className="text-xs px-2 py-0.5 rounded-md bg-slate-100 text-slate-500">{voice.accent}</span>
                      </div>
                      <p className="text-sm text-slate-500 mt-0.5 leading-snug">{voice.tagline}</p>
                    </div>
                    <div className={`w-9 h-9 rounded-full flex items-center justify-center flex-shrink-0 transition-colors ${activeVoice === i ? 'bg-primary-600 text-white' : 'bg-slate-100 text-slate-400'}`}>
                      {activeVoice === i && playing ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
                    </div>
                  </div>
                </button>
              ))}
            </div>

            <p className="text-sm text-slate-400 mt-5 pt-4 border-t border-slate-100">Want a fully custom voice? Pro plans support custom voice cloning and your own scripts.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
