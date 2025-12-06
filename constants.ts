import { Goal, MechanismStep, TrainingMode, WorkDirection, Project, OrgDepartment } from './types';

export const APP_NAME = "启智双创工作室";
export const DEPARTMENT = "长春师范大学教育学院";

export const SYSTEM_INSTRUCTION = `你是由长春师范大学教育学院启智双创工作室开发的AI助手。
你的主要任务是介绍工作室情况、组织架构及“双创项目孵化计划”。

根据以下信息回答：
1. 工作室简介：
   - 隶属于长春师范大学教育学院，以教育技术学为基石，深度融合AI技术。
   - 致力于打造“产教融合、校企协同”的创新创业孵化平台。
   - 重点方向：AI教育工具、智能微课、智慧教学平台、虚拟仿真、数字孪生、AI赋能教师教育。
   - 服务：技术实践 -> 项目孵化 -> 能力认证 -> 就业推荐。

2. 组织架构：
   - 核心：启智双创工作室。
   - 下设三大中心：
     (1) 商务产品中心：市场商务部、产品策划部、秘书管理处。
     (2) 技术培训中心（比赛中心）：视频、AI应用、建模、编程。
     (3) 项目工作中心：3D打印工作坊、视频绘本工作坊、精品课程工作坊、系统开发工作组、教育网站工作组、机器人研发小队。
   - 出口/孵化：创业孵化器（孵化创意科技公司等）。

3. 培养模式：
   - 分层进阶制：入门->进阶->核心->项目负责人。
   - 项目驱动制：围绕真实项目。
   - 导师双轨制：校内导师（学术/技术）+ 企业导师（产业视角/实战/管理）。
   - 工作坊与集训：AI+教育工作坊、实战集训营。

4. 工作方向：
   - 创新创业：大创项目、互联网+大赛、软著专利孵化。
   - 技术项目式学习：承接企业订单，边做边学赚佣金，能力证书。业务包括文创、3D打印、精品课制作。

5. 孵化机制（核心计划）：
   - 3.1 导师征集（11-12月）。
   - 3.2 学生申报（11月-次年3月）。
   - 3.3 校企合作项目导入。
   - 3.4 师生双向选择（12月末-次年3月）。
   - 3.5 公平保障：导师限指导1个大创，3个大赛项目。

回答风格：专业、热情、简洁。`;

export const STUDIO_INTRO = {
  title: "“启智”双创工作室",
  subtitle: "产教融合 · 校企协同 · 创新孵化",
  description: "“启智”双创工作室隶属于长春师范大学教育学院，以教育技术学专业为基石，深度融合人工智能技术，致力于打造“产教融合、校企协同”的创新创业孵化平台。",
  techFields: [
    "AI教育工具研发",
    "智能微课/精品课程开发",
    "智慧教学资源/平台搭建",
    "教育类虚拟仿真与数字孪生",
    "AI赋能教师教育"
  ],
  service: "为全校学生提供从技术实践、项目孵化到能力认证、就业推荐的全链条服务。"
};

export const ORG_STRUCTURE: OrgDepartment[] = [
  {
    title: "商务产品中心",
    color: "cyan",
    items: [
      "市场商务部",
      "产品策划部",
      "秘书管理处"
    ]
  },
  {
    title: "技术培训中心",
    subtitle: "(比赛中心)",
    color: "indigo",
    items: [
      "视频",
      "AI应用",
      "建模",
      "编程"
    ]
  },
  {
    title: "项目工作中心",
    color: "pink",
    items: [
      "3D打印工作坊",
      "视频绘本工作坊",
      "精品课程工作坊",
      "系统开发工作组",
      "教育网站工作组",
      "机器人研发小队"
    ]
  },
  {
    title: "创业孵化器",
    color: "rose",
    isIncubator: true,
    items: [
      "创意科技公司",
      "更多公司 ..."
    ]
  }
];

export const TRAINING_MODES: TrainingMode[] = [
  {
    title: "分层进阶制",
    description: ["根据成员基础与目标，设置“入门 → 进阶 → 核心 → 项目负责人”的成长路径，提供阶梯式培养内容。"],
    icon: "Layers"
  },
  {
    title: "项目驱动制",
    description: ["核心培养围绕真实项目展开，成员在项目中学习技术、锻炼能力、全面提升。"],
    icon: "Cpu"
  },
  {
    title: "导师双轨制",
    description: [
      "校内导师：由教育学院教师担任，负责学业指导、技术答疑、项目把关。",
      "企业导师：聘请合作企业资深工程师、产品经理，提供产业前沿视角与实战指导。"
    ],
    icon: "Users"
  },
  {
    title: "工作坊与集训",
    description: ["定期举办“AI+教育”前沿技术工作坊、项目实战集训营、创新思维训练营。"],
    icon: "Zap"
  }
];

export const WORK_DIRECTIONS: WorkDirection[] = [
  {
    title: "创新创业方向",
    description: "师生共研教育项目，孵化专利软著，冲击顶级赛事。",
    items: [
      "大学生创新创业训练计划项目",
      "大学生创新大赛（原互联网+）",
      "计算机软件设计（机器人）大赛",
      "专利软著孵化"
    ],
    icon: "Trophy",
    colorClass: "from-blue-500 to-indigo-600"
  },
  {
    title: "技术项目式学习",
    description: "承接企业技术项目订单，边做边学，产教分润。",
    items: [
      "文创设计、3D打印礼品",
      "录课中心（精品课制作）",
      "企业真实项目订单",
      "能力证书直达就业"
    ],
    icon: "Briefcase",
    colorClass: "from-emerald-500 to-teal-600"
  }
];

export const PROJECTS: Project[] = [
  {
    title: "启智AI助力教学网",
    status: "目前在全新改版中",
    description: "构建国际数字教育标准体系框架，集成AI教学工具集、数字人分身、AI视频创作与Agent智能体，打造AI赋能教育的综合平台。",
    tags: ["AI教育", "教学平台", "数字人"],
    imagePlaceholderColor: "bg-blue-100"
  },
  {
    title: "智联课本",
    status: "全力开发中",
    description: "智能交互个性化学习平台。基于大数据和人工智能技术，提供3D教材互动、AI智能助手及数据驱动的个性化学习体验。",
    tags: ["个性化学习", "3D互动", "数据驱动"],
    imagePlaceholderColor: "bg-indigo-100"
  }
];

// Existing constants for the specific Incubation Plan
export const GOALS: Goal[] = [
  {
    title: "提前布局",
    description: "提前开展项目储备和团队组建工作，抢占先机。",
    icon: "Clock"
  },
  {
    title: "质量提升",
    description: "通过孵化，提升项目质量和竞争力。",
    icon: "TrendingUp"
  },
  {
    title: "公平机制",
    description: "建立公平、透明的项目分配机制。",
    icon: "Scale"
  },
  {
    title: "成果导向",
    description: "力争获得省级以上立项和奖项突破。",
    icon: "Trophy"
  }
];

export const MECHANISMS: MechanismStep[] = [
  {
    title: "导师项目征集",
    time: "每年11-12月启动",
    icon: "UserPlus",
    content: [
      "导师扫码入库",
      "提交个人基本情况",
      "明确项目指导方向和成员需求"
    ]
  },
  {
    title: "学生自主申报",
    time: "每年11月 - 次年3月",
    icon: "FileText",
    content: [
      "学生提交项目申报书（创意、可行性、资源需求）",
      "工作室组织专家评审",
      "评级：优秀、良好、待完善"
    ]
  },
  {
    title: "校企合作项目导入",
    time: "全年开放",
    icon: "Building2",
    content: [
      "鼓励合作企业提出实践性项目",
      "工作室统一对接企业资源",
      "面向全院学生开放申请"
    ]
  },
  {
    title: "师生双向选择机制",
    time: "12月末 - 次年3月",
    icon: "Users",
    highlight: true,
    content: [
      "学生最多选择3个导师项目，按优先级排序",
      "导师面试，增加匹配质量",
      "工作室推荐候选导师，双向沟通确认",
      "如无匹配，工作室协调其他导师"
    ]
  }
];