import React from 'react';
import { 
  GraduationCap, 
  Target, 
  Lightbulb, 
  Calendar, 
  Users, 
  Building2, 
  FileText, 
  Scale, 
  ArrowRight, 
  UserPlus, 
  CheckCircle2, 
  Trophy, 
  Clock, 
  TrendingUp,
  MapPin,
  MessageCircle,
  Cpu,
  Layers,
  Zap,
  Briefcase,
  Monitor,
  Printer,
  Video,
  Rocket,
  QrCode,
  Globe,
  Network
} from 'lucide-react';
import AIChat from './components/AIChat';
import { 
  APP_NAME, 
  DEPARTMENT, 
  GOALS, 
  MECHANISMS, 
  STUDIO_INTRO, 
  TRAINING_MODES, 
  WORK_DIRECTIONS, 
  PROJECTS,
  ORG_STRUCTURE
} from './constants';

const App: React.FC = () => {
  const getIcon = (name: string) => {
    switch (name) {
      case 'Clock': return <Clock size={32} />;
      case 'TrendingUp': return <TrendingUp size={32} />;
      case 'Scale': return <Scale size={32} />;
      case 'Trophy': return <Trophy size={32} />;
      case 'UserPlus': return <UserPlus size={24} />;
      case 'FileText': return <FileText size={24} />;
      case 'Building2': return <Building2 size={24} />;
      case 'Users': return <Users size={24} />;
      case 'Layers': return <Layers size={40} />;
      case 'Cpu': return <Cpu size={40} />;
      case 'Zap': return <Zap size={40} />;
      case 'Briefcase': return <Briefcase size={32} />;
      default: return <Target size={32} />;
    }
  };

  // Helper function to get color classes based on the color name defined in constants
  const getColorClasses = (color: string) => {
    switch(color) {
      case 'cyan': return { bg: 'bg-cyan-50', border: 'border-cyan-200', text: 'text-cyan-800', headerBg: 'bg-cyan-100', dot: 'bg-cyan-400' };
      case 'indigo': return { bg: 'bg-indigo-50', border: 'border-indigo-200', text: 'text-indigo-800', headerBg: 'bg-indigo-100', dot: 'bg-indigo-400' };
      case 'pink': return { bg: 'bg-pink-50', border: 'border-pink-200', text: 'text-pink-800', headerBg: 'bg-pink-100', dot: 'bg-pink-400' };
      case 'rose': return { bg: 'bg-rose-50', border: 'border-rose-200', text: 'text-rose-800', headerBg: 'bg-rose-100', dot: 'bg-rose-400' };
      default: return { bg: 'bg-slate-50', border: 'border-slate-200', text: 'text-slate-800', headerBg: 'bg-slate-100', dot: 'bg-slate-400' };
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 selection:bg-primary-100 selection:text-primary-900 font-sans">
      
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-40 bg-white/90 backdrop-blur-md border-b border-slate-200 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="bg-primary-600 text-white p-2 rounded-lg shadow-sm">
              <Lightbulb size={24} />
            </div>
            <div>
              <h1 className="text-xl font-bold text-slate-900 tracking-tight leading-none">{APP_NAME}</h1>
              <p className="text-xs text-slate-500 font-medium">{DEPARTMENT}</p>
            </div>
          </div>
          <div className="hidden md:flex gap-8 text-sm font-medium text-slate-600">
            <a href="#about" className="hover:text-primary-600 transition-colors">工作室简介</a>
            <a href="#org" className="hover:text-primary-600 transition-colors">组织架构</a>
            <a href="#training" className="hover:text-primary-600 transition-colors">培养模式</a>
            <a href="#projects" className="hover:text-primary-600 transition-colors">在研项目</a>
            <a href="#plan" className="hover:text-primary-600 transition-colors">孵化计划</a>
            <a href="#contact" className="px-4 py-2 bg-primary-600 text-white rounded-full hover:bg-primary-700 transition-colors">加入我们</a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-white">
        {/* Background Elements */}
        <div className="absolute inset-0 z-0">
          <div className="absolute top-0 right-0 w-2/3 h-full bg-gradient-to-l from-blue-50 to-transparent opacity-70"></div>
          <div className="absolute bottom-0 left-0 w-1/2 h-full bg-gradient-to-r from-indigo-50 to-transparent opacity-60"></div>
          <div className="absolute top-20 right-20 w-72 h-72 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse"></div>
          <div className="absolute bottom-20 left-20 w-96 h-96 bg-indigo-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30"></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-50 text-blue-700 text-sm font-bold mb-8 border border-blue-100 shadow-sm">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-blue-600"></span>
              </span>
              AI + 教育 · 产教融合 · 创新孵化
            </div>
            <h1 className="text-5xl md:text-7xl font-bold text-slate-900 mb-8 tracking-tight leading-tight">
              打造 <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-indigo-600">智慧教育</span><br />
              双创孵化新生态
            </h1>
            <p className="text-xl md:text-2xl text-slate-600 mb-10 leading-relaxed font-light">
              以教育技术为基石，深度融合人工智能。<br className="hidden md:block"/>
              为全校学生提供从技术实践到项目孵化的全链条服务。
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="#about" className="inline-flex items-center justify-center px-8 py-4 text-base font-bold text-white bg-primary-600 rounded-xl hover:bg-primary-700 shadow-lg shadow-primary-500/30 transition-all hover:-translate-y-1">
                了解工作室
                <ArrowRight className="ml-2" size={20} />
              </a>
              <a href="#plan" className="inline-flex items-center justify-center px-8 py-4 text-base font-bold text-slate-700 bg-white border border-slate-200 rounded-xl hover:bg-slate-50 hover:border-slate-300 shadow-sm transition-all hover:-translate-y-1">
                查看孵化计划
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Studio Intro Section */}
      <section id="about" className="py-24 bg-slate-50 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            {/* Left Column: Text Info */}
            <div className="lg:col-span-7 space-y-8">
              <div>
                <h2 className="text-3xl font-bold text-slate-900 mb-2 flex items-center gap-3">
                  <div className="w-10 h-10 bg-primary-600 text-white rounded-lg flex items-center justify-center">
                    <Rocket size={24} />
                  </div>
                  {STUDIO_INTRO.title}
                </h2>
                <p className="text-primary-600 font-medium text-lg mb-6">{STUDIO_INTRO.subtitle}</p>
                <p className="text-lg text-slate-600 leading-relaxed mb-6">
                  {STUDIO_INTRO.description}
                </p>
                <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm">
                  <h3 className="font-bold text-slate-900 mb-4 flex items-center gap-2">
                    <Target className="text-accent-500" size={20} />
                    技术聚焦方向
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {STUDIO_INTRO.techFields.map((field, idx) => (
                      <span key={idx} className="px-3 py-1.5 bg-slate-100 text-slate-700 rounded-lg text-sm font-medium border border-slate-200 hover:bg-white hover:border-primary-200 hover:text-primary-700 transition-colors">
                        {field}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            
            {/* Right Column: Visual/Stats */}
            <div className="lg:col-span-5">
              <div className="bg-gradient-to-br from-primary-600 to-indigo-700 rounded-3xl p-8 text-white shadow-xl relative overflow-hidden">
                <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2 blur-2xl"></div>
                <h3 className="text-xl font-bold mb-6 relative z-10">全链条服务体系</h3>
                <div className="space-y-6 relative z-10">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center backdrop-blur-sm">
                      <Monitor size={24} />
                    </div>
                    <div>
                      <h4 className="font-bold">技术实践</h4>
                      <p className="text-blue-100 text-sm">前沿AI技术落地应用</p>
                    </div>
                  </div>
                  <div className="w-px h-6 bg-white/20 ml-6"></div>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center backdrop-blur-sm">
                      <Rocket size={24} />
                    </div>
                    <div>
                      <h4 className="font-bold">项目孵化</h4>
                      <p className="text-blue-100 text-sm">从创意到产品落地</p>
                    </div>
                  </div>
                  <div className="w-px h-6 bg-white/20 ml-6"></div>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center backdrop-blur-sm">
                      <GraduationCap size={24} />
                    </div>
                    <div>
                      <h4 className="font-bold">能力认证 & 就业</h4>
                      <p className="text-blue-100 text-sm">证书加持，直达名企</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Organization Chart Section (NEW) */}
      <section id="org" className="py-24 bg-white border-y border-slate-100 overflow-x-auto">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-primary-600 font-bold tracking-wider uppercase text-sm">Organization</span>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mt-2">工作室组织架构</h2>
            <p className="text-slate-600 mt-4 max-w-2xl mx-auto">
              明确的职能划分，高效的协同机制
            </p>
          </div>

          <div className="relative min-w-[800px] md:min-w-0">
            {/* Top Level: Studio */}
            <div className="flex justify-center mb-8 relative z-10">
              <div className="bg-slate-900 text-white px-8 py-4 rounded-xl shadow-lg border-2 border-slate-700 flex flex-col items-center">
                <Network size={28} className="mb-2 text-primary-400" />
                <h3 className="text-xl font-bold tracking-wide">启智双创工作室</h3>
              </div>
            </div>

            {/* Connecting Lines (Desktop/Tablet) */}
            <div className="hidden md:block relative h-12 w-full mb-8">
               {/* Vertical line from Studio */}
               <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-slate-300 -translate-x-1/2 h-8"></div>
               {/* Horizontal line across children */}
               <div className="absolute left-[12.5%] right-[12.5%] top-8 h-0.5 bg-slate-300"></div>
               {/* Vertical lines to children */}
               <div className="absolute left-[12.5%] top-8 h-4 w-0.5 bg-slate-300"></div>
               <div className="absolute left-[37.5%] top-8 h-4 w-0.5 bg-slate-300"></div>
               <div className="absolute left-[62.5%] top-8 h-4 w-0.5 bg-slate-300"></div>
               <div className="absolute left-[87.5%] top-8 h-4 w-0.5 bg-slate-300"></div>
            </div>

            {/* Second Level: Centers */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              {ORG_STRUCTURE.map((dept, idx) => {
                const colors = getColorClasses(dept.color);
                return (
                  <div key={idx} className="flex flex-col relative">
                    {/* Mobile connector line */}
                    <div className="md:hidden w-0.5 h-8 bg-slate-300 mx-auto -mt-8 mb-0"></div>
                    
                    <div className={`flex-1 rounded-xl overflow-hidden border ${colors.border} shadow-sm hover:shadow-md transition-shadow bg-white`}>
                      {/* Header */}
                      <div className={`p-4 ${colors.headerBg} border-b ${colors.border} text-center`}>
                        <h4 className={`font-bold text-lg ${colors.text}`}>{dept.title}</h4>
                        {dept.subtitle && <p className={`text-xs ${colors.text} opacity-80 mt-1`}>{dept.subtitle}</p>}
                      </div>
                      
                      {/* Items */}
                      <div className="p-4 space-y-2">
                         {dept.items.map((item, i) => (
                           <div key={i} className={`flex items-center gap-2 px-3 py-2 rounded-lg ${colors.bg} border border-transparent hover:border-${dept.color}-200 transition-colors`}>
                             {/* Small logic for icon based on content, or generic dot */}
                             <div className={`w-2 h-2 rounded-full flex-shrink-0 ${colors.dot}`}></div>
                             <span className={`text-sm font-medium ${colors.text}`}>{item}</span>
                           </div>
                         ))}
                      </div>
                      
                      {/* Incubator Highlight */}
                      {dept.isIncubator && (
                        <div className="px-4 pb-4">
                           <div className="text-xs text-center bg-white/50 py-1 rounded text-rose-600 font-bold border border-rose-100">
                             商业化出口
                           </div>
                        </div>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Training Mode Section */}
      <section id="training" className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-primary-600 font-bold tracking-wider uppercase text-sm">Training Model</span>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mt-2">多元化培养模式</h2>
            <p className="text-slate-600 mt-4 max-w-2xl mx-auto">
              科学的成长路径与实战体系，助力学生全方位提升
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {TRAINING_MODES.map((mode, idx) => (
              <div key={idx} className="group relative bg-white p-8 rounded-2xl border border-slate-100 hover:border-primary-100 shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden">
                <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity transform group-hover:scale-110">
                  {getIcon(mode.icon)}
                </div>
                <div className="w-14 h-14 bg-primary-50 rounded-xl flex items-center justify-center text-primary-600 mb-6 group-hover:bg-primary-600 group-hover:text-white transition-colors">
                  {getIcon(mode.icon)}
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">{mode.title}</h3>
                <div className="space-y-2">
                  {mode.description.map((desc, i) => (
                    <p key={i} className="text-slate-600 leading-relaxed text-sm md:text-base">{desc}</p>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Work Directions Section */}
      <section className="py-24 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
             <span className="text-accent-600 font-bold tracking-wider uppercase text-sm">Work Direction</span>
             <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mt-2">核心工作方向</h2>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-10">
            {WORK_DIRECTIONS.map((dir, idx) => (
              <div key={idx} className="relative rounded-3xl overflow-hidden shadow-lg group">
                <div className={`absolute inset-0 bg-gradient-to-br ${dir.colorClass} opacity-90 transition-opacity group-hover:opacity-100`}></div>
                <div className="relative p-10 h-full flex flex-col text-white">
                  <div className="mb-6 bg-white/20 w-fit p-3 rounded-2xl backdrop-blur-sm">
                    {getIcon(dir.icon)}
                  </div>
                  <h3 className="text-2xl font-bold mb-2">{dir.title}</h3>
                  <p className="text-white/80 mb-8">{dir.description}</p>
                  
                  <div className="mt-auto space-y-3">
                    {dir.items.map((item, i) => (
                      <div key={i} className="flex items-center gap-3 bg-black/10 p-3 rounded-lg backdrop-blur-sm border border-white/5">
                        <CheckCircle2 size={18} className="text-white/90" />
                        <span className="font-medium">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-12 grid sm:grid-cols-3 gap-6 text-center">
            <div className="bg-slate-50 p-6 rounded-2xl shadow-sm border border-slate-100">
               <Printer className="mx-auto text-primary-500 mb-3" size={32} />
               <h4 className="font-bold text-slate-800">3D打印/文创</h4>
            </div>
            <div className="bg-slate-50 p-6 rounded-2xl shadow-sm border border-slate-100">
               <Video className="mx-auto text-primary-500 mb-3" size={32} />
               <h4 className="font-bold text-slate-800">精品课录制</h4>
            </div>
            <div className="bg-slate-50 p-6 rounded-2xl shadow-sm border border-slate-100">
               <Cpu className="mx-auto text-primary-500 mb-3" size={32} />
               <h4 className="font-bold text-slate-800">软件开发</h4>
            </div>
          </div>
        </div>
      </section>

      {/* Ongoing Projects Section */}
      <section id="projects" className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-4">
             <div>
                <span className="text-primary-600 font-bold tracking-wider uppercase text-sm">Ongoing Projects</span>
                <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mt-2">在研项目展示</h2>
             </div>
             <p className="text-slate-500 pb-2">工作室部分正在进行中的重点项目</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {PROJECTS.map((project, idx) => (
              <div key={idx} className="bg-white rounded-3xl overflow-hidden border border-slate-100 hover:shadow-xl transition-all duration-300 flex flex-col">
                {/* Visual Placeholder for Project Image */}
                <div className={`h-48 w-full ${project.imagePlaceholderColor} relative flex items-center justify-center overflow-hidden group`}>
                   {idx === 0 ? <Globe size={64} className="text-blue-500/50" /> : <Monitor size={64} className="text-indigo-500/50" />}
                   <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors"></div>
                   <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-md px-3 py-1 rounded-full text-xs font-bold text-primary-700 shadow-sm">
                     {project.status}
                   </div>
                </div>
                
                <div className="p-8 flex-1 flex flex-col">
                  <h3 className="text-2xl font-bold text-slate-900 mb-3">{project.title}</h3>
                  <p className="text-slate-600 mb-6 flex-1">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, i) => (
                      <span key={i} className="text-xs font-semibold px-3 py-1 bg-slate-50 border border-slate-200 rounded-full text-slate-600">
                        #{tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Incubation Plan (Original Content) */}
      <section id="plan" className="py-24 bg-slate-900 text-white relative overflow-hidden">
        {/* Abstract shapes */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary-900/40 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-indigo-900/40 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2 pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <span className="text-primary-400 font-bold tracking-wider uppercase text-sm">Annual Plan</span>
            <h2 className="text-3xl md:text-4xl font-bold text-white mt-2">双创项目孵化计划</h2>
            <p className="text-slate-400 mt-4 max-w-2xl mx-auto">
              规范化的流程，只为筛选和培育最优质的创新火种
            </p>
          </div>

          {/* Goals Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
            {GOALS.map((goal, index) => (
              <div key={index} className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-colors">
                <div className="text-primary-400 mb-4">
                  {getIcon(goal.icon)}
                </div>
                <h4 className="text-lg font-bold text-white mb-2">{goal.title}</h4>
                <p className="text-slate-400 text-sm leading-relaxed">{goal.description}</p>
              </div>
            ))}
          </div>

          {/* Timeline / Mechanism */}
          <div className="space-y-8">
             <h3 className="text-2xl font-bold text-center mb-10">年度实施流程</h3>
             <div className="grid md:grid-cols-2 gap-6">
                {MECHANISMS.map((step, index) => (
                  <div 
                    key={index} 
                    className={`rounded-2xl p-6 border transition-all ${step.highlight ? 'bg-gradient-to-br from-primary-600 to-indigo-700 border-transparent shadow-lg transform md:scale-105 z-10' : 'bg-slate-800/50 border-slate-700'}`}
                  >
                    <div className="flex justify-between items-start mb-4">
                       <div className={`p-2 rounded-lg ${step.highlight ? 'bg-white/20 text-white' : 'bg-slate-700 text-primary-400'}`}>
                          {getIcon(step.icon)}
                       </div>
                       <span className={`text-xs font-bold px-2 py-1 rounded ${step.highlight ? 'bg-white/20 text-white' : 'bg-slate-700 text-slate-300'}`}>
                         {step.time}
                       </span>
                    </div>
                    <h4 className="text-xl font-bold mb-4">{step.title}</h4>
                    <ul className="space-y-2">
                       {step.content.map((item, i) => (
                         <li key={i} className="flex items-start gap-2 text-sm">
                           <div className={`mt-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0 ${step.highlight ? 'bg-primary-300' : 'bg-primary-500'}`}></div>
                           <span className={step.highlight ? 'text-blue-50' : 'text-slate-300'}>{item}</span>
                         </li>
                       ))}
                    </ul>
                  </div>
                ))}
             </div>
             
             {/* Fairness Note */}
             <div className="bg-red-500/10 border border-red-500/20 rounded-2xl p-6 mt-8 flex items-start gap-4">
               <Scale className="text-red-400 flex-shrink-0 mt-1" />
               <div>
                 <h4 className="font-bold text-red-200 mb-1">公平性保障机制</h4>
                 <p className="text-sm text-red-200/70">为防止资源集中：每位导师最多指导1个大创项目，3个大赛项目。</p>
               </div>
             </div>
          </div>
        </div>
      </section>

      {/* Contact / Join */}
      <section id="contact" className="py-20 bg-white border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-slate-900 to-slate-800 rounded-3xl p-8 md:p-16 flex flex-col md:flex-row items-center justify-between gap-12 overflow-hidden relative">
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl"></div>
            
            <div className="relative z-10 text-white max-w-xl">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">加入我们</h2>
              <p className="text-slate-300 text-lg mb-8">
                扫描二维码加入启智双创工作室，开启你的AI创新之旅。获取最新项目资讯、比赛通知及导师对接信息。
              </p>
              <div className="flex flex-col gap-4">
                 <div className="flex items-center gap-3 text-slate-300">
                    <MapPin size={20} className="text-primary-400" />
                    <span>长春师范大学教育学院 启智双创工作室</span>
                 </div>
                 <div className="flex items-center gap-3 text-slate-300">
                    <MessageCircle size={20} className="text-primary-400" />
                    <span>微信扫码 / AI助手咨询</span>
                 </div>
              </div>
            </div>

            <div className="relative z-10 bg-white p-6 rounded-2xl shadow-2xl rotate-3 hover:rotate-0 transition-transform duration-500">
               <div className="w-48 h-48 bg-slate-100 rounded-lg flex flex-col items-center justify-center text-slate-400 border-2 border-dashed border-slate-300">
                  <QrCode size={64} className="mb-2 text-slate-300"/>
                  <span className="text-xs font-medium">微信扫码加入</span>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-50 text-slate-500 py-12 border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <div className="flex justify-center items-center gap-2 mb-4 text-slate-900 font-bold text-xl">
            <Lightbulb size={24} className="text-primary-600" />
            {APP_NAME}
          </div>
          <p className="mb-8 max-w-lg mx-auto text-sm">{DEPARTMENT} · 专注于AI教育创新的孵化平台</p>
          <div className="text-xs text-slate-400">
            <p>&copy; {new Date().getFullYear()} 长春师范大学教育学院. All rights reserved.</p>
          </div>
        </div>
      </footer>

      {/* AI Widget */}
      <AIChat />
    </div>
  );
}

export default App;