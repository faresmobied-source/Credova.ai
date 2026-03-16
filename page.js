'use client';

import { useState, useEffect, useRef, useCallback } from "react";

/* ═══════════════════════════════════════════════════
   DESIGN TOKENS
   ═══════════════════════════════════════════════════ */
const C = {
  skyTop:"#5C9BE6",skyMid:"#89B8F0",skyLight:"#EAF4FF",skyLightest:"#F0F9FF",
  mint:"#34D399",mintLight:"#ECFDF5",mintGlow:"rgba(52,211,153,0.35)",mintSoft:"rgba(52,211,153,0.08)",
  peach:"#FF9A8A",peachGrad:"linear-gradient(135deg,#FF9E8C 0%,#FF7F6A 100%)",peachShadow:"rgba(255,154,138,0.30)",
  charcoal:"#1A1A1A",gray:"#6B7280",grayLight:"#9CA3AF",grayBorder:"#E5E7EB",
  white:"#FFFFFF",surface:"rgba(255,255,255,0.95)",blue:"#60A5FA",amber:"#F59E0B",purple:"#A78BFA",
};
const F = { d:"'Plus Jakarta Sans','DM Sans',sans-serif", b:"'DM Sans',sans-serif" };

/* ═══════════════════════════════════════════════════
   BRAND CONFIG — centralized, change once everywhere
   ═══════════════════════════════════════════════════ */
const BRAND = {
  name: "Credova",
  domain: "credova.ai",
  tagline: "Your calm, smart guide to money in Canada.",
  assistant: "Nova",
  assistantFull: "Nova from Credova",
  assistantRole: "Your financial guide",
};

/* Credova "C" Logo — clean gradient arc, fixed blending */
function CredovaLogo({size=80,style:sx}){
  const R=40,CIRC=2*Math.PI*R,GAP=Math.round(CIRC*0.30),ARC=Math.round(CIRC-GAP);
  const Ri=36,CIRCi=2*Math.PI*Ri,GAPi=Math.round(CIRCi*0.30),ARCi=Math.round(CIRCi-GAPi);
  return <svg width={size} height={size} viewBox="0 0 100 100" fill="none" style={sx}>
    <defs>
      <linearGradient id="clg" x1="75" y1="8" x2="30" y2="92" gradientUnits="userSpaceOnUse">
        <stop offset="0%" stopColor="#86EFAC"/><stop offset="18%" stopColor="#4ADE80"/>
        <stop offset="40%" stopColor="#22C55E"/><stop offset="65%" stopColor="#15803D"/>
        <stop offset="85%" stopColor="#166534"/><stop offset="100%" stopColor="#14532D"/>
      </linearGradient>
      <linearGradient id="clh" x1="62" y1="14" x2="42" y2="55" gradientUnits="userSpaceOnUse">
        <stop offset="0%" stopColor="#FFF" stopOpacity="0.35"/><stop offset="100%" stopColor="#FFF" stopOpacity="0"/>
      </linearGradient>
    </defs>
    <circle cx="50" cy="53" r={R} fill="none" stroke="#14532D" strokeWidth="13" strokeLinecap="round" opacity="0.09"
      strokeDasharray={`${ARC} ${GAP}`} style={{filter:"blur(5px)",transform:"rotate(55deg)",transformOrigin:"50px 53px"}}/>
    <circle cx="50" cy="50" r={R} fill="none" stroke="url(#clg)" strokeWidth="13" strokeLinecap="round"
      strokeDasharray={`${ARC} ${GAP}`} style={{transform:"rotate(55deg)",transformOrigin:"50px 50px"}}/>
    <circle cx="50" cy="50" r={Ri} fill="none" stroke="url(#clh)" strokeWidth="4" strokeLinecap="round"
      strokeDasharray={`${ARCi} ${GAPi}`} style={{transform:"rotate(55deg)",transformOrigin:"50px 50px"}}/>
  </svg>;
}

/* ── Animated Credova Intro — full circle draws → morphs to C ── */
function AnimatedCredovaIntro({size=140,onComplete}){
  const [phase,setPhase]=useState(0);
  useEffect(()=>{
    const timers = [
      setTimeout(()=>setPhase(1), 60),
      setTimeout(()=>setPhase(2), 1100),
      setTimeout(()=>setPhase(3), 1350),
      setTimeout(()=>{setPhase(4); onComplete&&onComplete()}, 2000),
    ];
    return ()=>timers.forEach(clearTimeout);
  },[]);

  const R = 40;
  const CIRC = 2 * Math.PI * R;
  const GAP_FRAC = 0.30;
  const GAP = Math.round(CIRC * GAP_FRAC);
  const ARC = Math.round(CIRC - GAP);
  const Ri = 36;
  const CIRCi = 2 * Math.PI * Ri;
  const GAPi = Math.round(CIRCi * GAP_FRAC);
  const ARCi = Math.round(CIRCi - GAPi);
  const ROT = 55;
  const drawing = phase >= 1;
  const complete = phase >= 2;
  const morphing = phase >= 3;
  const settled = phase >= 4;

  return <div style={{position:"relative",width:size,height:size,display:"flex",alignItems:"center",justifyContent:"center"}}>
    <div style={{position:"absolute",inset:-30,borderRadius:"50%",background:"radial-gradient(circle, rgba(52,211,153,0.15) 0%, transparent 70%)",filter:"blur(18px)",opacity: complete ? 1 : 0,transition: "opacity 0.8s ease-out",}}/>
    <svg width={size} height={size} viewBox="0 0 100 100" fill="none" style={{position:"relative",zIndex:1}}>
      <defs>
        <linearGradient id="cag" x1="75" y1="8" x2="30" y2="92" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#86EFAC"/><stop offset="18%" stopColor="#4ADE80"/><stop offset="40%" stopColor="#22C55E"/><stop offset="65%" stopColor="#15803D"/><stop offset="85%" stopColor="#166534"/><stop offset="100%" stopColor="#14532D"/>
        </linearGradient>
        <linearGradient id="cah" x1="62" y1="14" x2="42" y2="55" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#FFF" stopOpacity="0.35"/><stop offset="100%" stopColor="#FFF" stopOpacity="0"/>
        </linearGradient>
      </defs>
      <circle cx="50" cy="50" r={R} fill="none" stroke="url(#cag)" strokeWidth="13" strokeLinecap="round" strokeDasharray={`${drawing?ARC:0} ${CIRC}`} style={{transform:`rotate(${ROT}deg)`,transformOrigin:"50px 50px",transition: drawing ? "stroke-dasharray 1s cubic-bezier(0.34,1.56,0.64,1)" : "none"}}/>
      <circle cx="50" cy="50" r={Ri} fill="none" stroke="url(#cah)" strokeWidth="4" strokeLinecap="round" strokeDasharray={`${drawing?ARCi:0} ${CIRCi}`} style={{transform:`rotate(${ROT}deg)`,transformOrigin:"50px 50px",transition: drawing ? "stroke-dasharray 1s cubic-bezier(0.34,1.56,0.64,1)" : "none"}}/>
    </svg>
  </div>;
}

// Minimal DB abstraction using localStorage
const DB = {
  get: async (k) => JSON.parse(localStorage.getItem(k) || "null"),
  set: async (k, v) => localStorage.setItem(k, JSON.stringify(v)),
  del: async (k) => localStorage.removeItem(k),
};

// Placeholder for missing components
const FadeIn = ({children, delay = 0, style}) => (
  <div style={{...style, animation: `fadeIn 0.6s ease-out ${delay}ms forwards`, opacity: 0}}>
    {children}
  </div>
);

const PressableCard = ({children, onClick, style}) => (
  <div onClick={onClick} style={{cursor: 'pointer', ...style}}>{children}</div>
);

const Glow = () => null;
const MicroStyles = () => (
  <style>{`
    @keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }
    * { box-sizing: border-box; }
  `}</style>
);

// Simplified onboarding
function OnboardingFlow({onComplete}) {
  const [step, setStep] = useState(0);
  const [profile, setProfile] = useState({name: '', userType: 'student', country: 'CA', goals: [], arrivalDate: ''});

  const finish = () => {
    const missions = [
      {id: 1, title: "Set Up Your Budget", status: "current", description: "Learn how to track spending in Canada"},
      {id: 2, title: "Understand Credit", status: "locked", description: "Credit scores and building credit history"},
      {id: 3, title: "Open a Bank Account", status: "locked", description: "Types of accounts and how to choose"},
    ];
    onComplete(profile, missions);
  };

  return <div style={{padding: 20, textAlign: 'center', height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'center'}}>
    <CredovaLogo size={80} />
    <h1 style={{fontFamily: F.d, fontSize: 24, color: C.charcoal, marginTop: 20}}>Welcome to {BRAND.name}</h1>
    <p style={{fontFamily: F.b, fontSize: 14, color: C.gray}}>Let's get you started with your Canadian money journey.</p>
    <div style={{marginTop: 20}}>
      <input type="text" placeholder="Your name" value={profile.name} onChange={e => setProfile({...profile, name: e.target.value})} style={{width: '100%', padding: 10, marginBottom: 10, borderRadius: 8, border: `1px solid ${C.grayBorder}`}} />
      <select value={profile.userType} onChange={e => setProfile({...profile, userType: e.target.value})} style={{width: '100%', padding: 10, marginBottom: 10, borderRadius: 8, border: `1px solid ${C.grayBorder}`}}>
        <option value="student">Student</option>
        <option value="worker">Worker</option>
      </select>
    </div>
    <button onClick={finish} style={{width: '100%', padding: 12, marginTop: 20, background: C.mint, color: C.white, border: 'none', borderRadius: 12, fontFamily: F.d, fontWeight: 600, cursor: 'pointer'}}>
      Start Journey →
    </button>
  </div>;
}

function HomeScreen({profile, missions, onStartMission}) {
  return <div style={{padding: 20, paddingTop: 80, paddingBottom: 100}}>
    <h2 style={{fontFamily: F.d, fontSize: 20, color: C.charcoal}}>Hi {profile?.name}! 👋</h2>
    <p style={{fontFamily: F.b, fontSize: 14, color: C.gray, marginBottom: 20}}>Here's your journey:</p>
    {missions.map(m => (
      <div key={m.id} onClick={() => m.status !== 'locked' && onStartMission(m.id)} style={{padding: 16, marginBottom: 12, background: C.white, borderRadius: 12, cursor: m.status === 'locked' ? 'not-allowed' : 'pointer', opacity: m.status === 'locked' ? 0.5 : 1}}>
        <div style={{fontFamily: F.d, fontWeight: 600, color: C.charcoal}}>{m.title}</div>
        <div style={{fontFamily: F.b, fontSize: 13, color: C.gray, marginTop: 4}}>{m.description}</div>
        <div style={{marginTop: 8, fontSize: 12, color: m.status === 'done' ? C.mint : C.gray}}>
          {m.status === 'done' ? '✓ Completed' : m.status === 'current' ? '→ Continue' : '🔒 Locked'}
        </div>
      </div>
    ))}
  </div>;
}

function MissionDetail({mission, onBack, onComplete}) {
  return <div style={{padding: 20, paddingTop: 80, paddingBottom: 100}}>
    <button onClick={onBack} style={{background: 'none', border: 'none', color: C.blue, cursor: 'pointer', fontFamily: F.b, marginBottom: 20}}>← Back</button>
    <h2 style={{fontFamily: F.d, fontSize: 20, color: C.charcoal}}>{mission.title}</h2>
    <p style={{fontFamily: F.b, color: C.gray, marginTop: 12}}>{mission.description}</p>
    <button onClick={onComplete} style={{width: '100%', padding: 12, marginTop: 20, background: C.mint, color: C.white, border: 'none', borderRadius: 12, fontFamily: F.d, fontWeight: 600, cursor: 'pointer'}}>
      Mark as Done ✓
    </button>
  </div>;
}

function ChatScreen() {
  return <div style={{padding: 20, paddingTop: 80, textAlign: 'center'}}><p style={{color: C.gray}}>Chat coming soon!</p></div>;
}

function RoadmapTab({missions}) {
  return <div style={{padding: 20, paddingTop: 80}}><h2 style={{fontFamily: F.d, fontSize: 18, color: C.charcoal}}>Your Roadmap</h2>{missions.map(m => <div key={m.id} style={{padding: 10, marginTop: 10, fontSize: 14, color: C.charcoal}}>{m.status === 'done' ? '✓' : '○'} {m.title}</div>)}</div>;
}

function ToolsScreen() {
  return <div style={{padding: 20, paddingTop: 80}}><h2 style={{fontFamily: F.d, fontSize: 18, color: C.charcoal}}>Tools</h2><p style={{color: C.gray}}>Financial tools coming soon</p></div>;
}

function ProfileScreen({profile, missions, onReset}) {
  const done = missions.filter(m => m.status === 'done').length;
  return <div style={{padding: 20, paddingTop: 80, paddingBottom: 100}}>
    <h2 style={{fontFamily: F.d, fontSize: 20, color: C.charcoal}}>{profile?.name}</h2>
    <div style={{marginTop: 20, padding: 16, background: C.white, borderRadius: 12}}>
      <div style={{fontSize: 14, color: C.gray}}>Progress: {done} / {missions.length} missions</div>
    </div>
    <button onClick={onReset} style={{width: '100%', padding: 12, marginTop: 20, border: '1.5px solid #EF4444', background: 'transparent', color: '#EF4444', borderRadius: 12, fontFamily: F.d, fontWeight: 600, cursor: 'pointer'}}>
      Reset
    </button>
  </div>;
}

function BottomNav({active, onNav}) {
  const tabs = ['home', 'chat', 'roadmap', 'tools', 'profile'];
  const icons = ['🏠', '💬', '🗺️', '🛠️', '👤'];
  return <div style={{position: 'absolute', bottom: 0, left: 0, right: 0, height: 80, background: C.white, borderTop: `1px solid ${C.grayBorder}`, display: 'flex', justifyContent: 'space-around', alignItems: 'center'}}>
    {tabs.map((tab, i) => (
      <button key={tab} onClick={() => onNav(tab)} style={{background: 'none', border: 'none', cursor: 'pointer', fontSize: 24, opacity: active === tab ? 1 : 0.5}}>
        {icons[i]}
      </button>
    ))}
  </div>;
}

export default function NovaNestApp() {
  const [loading, setLoading] = useState(true);
  const [onboarded, setOnboarded] = useState(false);
  const [profile, setProfile] = useState(null);
  const [missions, setMissions] = useState([]);
  const [tab, setTab] = useState('home');
  const [missionId, setMissionId] = useState(null);

  useEffect(() => {
    (async () => {
      const ob = await DB.get('nn-onboarded');
      if (ob) {
        const p = await DB.get('nn-profile');
        const m = await DB.get('nn-missions');
        setProfile(p);
        setMissions(m || []);
        setOnboarded(true);
      }
      setLoading(false);
    })();
  }, []);

  const onOnboard = (p, m) => {
    setProfile(p);
    setMissions(m);
    setOnboarded(true);
    DB.set('nn-onboarded', true);
    DB.set('nn-profile', p);
    DB.set('nn-missions', m);
  };

  const onReset = async () => {
    await DB.del('nn-onboarded');
    await DB.del('nn-profile');
    await DB.del('nn-missions');
    setOnboarded(false);
    setProfile(null);
    setMissions([]);
    setTab('home');
    setMissionId(null);
  };

  const completeMission = async (id) => {
    const up = [...missions];
    const idx = up.findIndex(m => m.id === id);
    if (idx < 0) return;
    up[idx] = {...up[idx], status: 'done'};
    for (let i = idx + 1; i < up.length; i++) {
      if (up[i].status === 'locked') {
        up[i] = {...up[i], status: 'current'};
        break;
      }
    }
    setMissions(up);
    await DB.set('nn-missions', up);
    setMissionId(null);
  };

  if (loading) return <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '100vh', background: 'linear-gradient(160deg,#d4ede8 0%,#dceee8 25%,#eee9e4 50%,#e8cfc5 100%)'}}>
    <div style={{width: 393, height: 852, borderRadius: 55, background: '#FAFAFA', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 12px 40px rgba(0,0,0,0.08)'}}>
      <div style={{textAlign: 'center'}}><CredovaLogo size={60} /><p style={{fontFamily: F.b, fontSize: 13, color: C.grayLight, marginTop: 12}}>Loading...</p></div>
    </div>
  </div>;

  const curMission = missionId ? missions.find(m => m.id === missionId) : null;

  return <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '100vh', padding: 20, background: 'linear-gradient(160deg,#d4ede8 0%,#dceee8 25%,#eee9e4 50%,#e8cfc5 100%)', fontFamily: F.d}}>
    <link href="https://fonts.googleapis.com/css2?family=DM+Sans:wght@300;400;500;600;700&family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap" rel="stylesheet" />
    <MicroStyles />
    <div style={{width: 393, height: 852, borderRadius: 55, position: 'relative', overflow: 'hidden', flexShrink: 0, background: '#FAFAFA', boxShadow: '0 0 0 1px rgba(0,0,0,0.06),0 2px 8px rgba(0,0,0,0.04),0 12px 40px rgba(0,0,0,0.08),0 40px 80px rgba(0,0,0,0.06),inset 0 0 0 1.5px rgba(255,255,255,0.5)'}}>
      <div style={{position: 'absolute', top: 12, left: '50%', transform: 'translateX(-50%)', width: 126, height: 36, background: '#1a1a1a', borderRadius: 20, zIndex: 100}} />
      <div style={{position: 'absolute', top: 0, left: 0, right: 0, height: 54, zIndex: 90, display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '14px 30px 0'}}>
        <span style={{fontFamily: F.b, fontWeight: 600, fontSize: 15, color: C.charcoal}}>9:41</span>
        <div style={{display: 'flex', alignItems: 'center', gap: 5}}></div>
      </div>
      <div style={{position: 'absolute', top: 54, left: 0, right: 0, bottom: 0}}>
        {!onboarded ? <OnboardingFlow onComplete={onOnboard} />
          : curMission ? <MissionDetail mission={curMission} onBack={() => setMissionId(null)} onComplete={() => completeMission(curMission.id)} />
          : <div style={{width: '100%', height: '100%', position: 'relative'}}>
            <div style={{position: 'absolute', inset: 0}}>
              {tab === 'home' && <HomeScreen profile={profile} missions={missions} onStartMission={(id) => setMissionId(id)} />}
              {tab === 'chat' && <ChatScreen />}
              {tab === 'roadmap' && <RoadmapTab missions={missions} />}
              {tab === 'tools' && <ToolsScreen />}
              {tab === 'profile' && <ProfileScreen profile={profile} missions={missions} onReset={onReset} />}
            </div>
            <BottomNav active={tab} onNav={setTab} />
          </div>}
      </div>
    </div>
  </div>;
}
