import { useState } from "react";

import {
  UserRoundCog,
  Globe,
  Mail,
  FolderOpen,
  Database,
  Bot,
  FileOutput,
  HandCoins,
  Search,
  UserStar,
  Activity,
  SquareUserRound,
} from "lucide-react";

const portals = [
  {
    name: "Web Admin Single Platform",
    url: "http://172.17.60.88:8000/admin/login",
    description: "สำหรับเข้าใช้งานระบบ Web Admin Single Platform",
    icon: UserRoundCog,
    bgColor: "#0f2c6e",
    iconColor: "#FFFFFF",
  },
  {
    name: "(M9) M-Flow THAI ADMIN",
    url: "https://192.168.10.100/new-mlpr/login",
    description: "สำหรับเข้าใช้งานระบบ M-Flow THAI ADMIN(M9)",
    icon: UserRoundCog,
    bgColor: "#0f2c6e",
    iconColor: "#FFFFFF",
  },
  {
    name: "iMind CRM",
    url: "https://imindmflow.clogic.asia/imind/",
    description: "ระบบ CRM สำหรับจัดการข้อมูลลูกค้าและเคสต่างๆ",
    icon: Mail,
    bgColor: "#AEE2F9",
    iconColor: "#0079ad",
  },
  {
    name: "Jira - SGLS board",
    url: "https://appworks.atlassian.net/jira/software/c/projects/SGLS/boards/419/timeline",
    description: "สำหรับดูบอร์ด Jira ของทีม SGLS",
    icon: Mail,
    bgColor: "#1868db",
    iconColor: "#FFFFFF",
  },
    {
    name: "Dev message template",
    url: "https://dev-message-template.web.app",
    description: "เว็บ template สำหรับส่งข้อความแจ้ง DEV",
    icon: Mail,
    bgColor: "#6F61C1",
    iconColor: "#FFFFFF",
  },
  {
    name: "Entertainment Complex",
    url: "http://172.20.20.26:1160",
    description: "ศูนย์รวมความบันเทิง Entertainment Complex",
    icon: Globe,
    bgColor: "#AEE2F9",
    iconColor: "#0079ad",
  },
  {
    name: "Car Balance และรายการผ่านทาง",
    url: "http://172.20.20.39",
    description: "สำหรับ Customer VIP",
    icon: UserStar,
    bgColor: "#FEF3C7",
    iconColor: "#D97706",
  },
  {
    name: "Operation Central Service",
    url: "http://172.17.60.88:8000/web-operation-central",
    description: "Operation Central Service",
    icon: SquareUserRound,
    bgColor: "#b5f9b4",
    iconColor: "#028000",
  },
  {
    name: "Member Register EPLUS MPLUS",
    url: "http://172.20.20.26:5220",
    description: "ระบบนับจำนวนผู้สมัครสมาชิก MFLOW ผ่านช่องทาง Mpass Plus และ EasyPass Plus ลงใน GSheet",
    icon: SquareUserRound,
    bgColor: "#b5f9b4",
    iconColor: "#028000",
  },
  {
    name: "ระบบถอยค่าปรับพินัย",
    url: "http://172.20.20.26:8010",
    description: "สำหรับตรวจสอบสถานะการถอยค่าปรับพินัย",
    icon: FileOutput,
    bgColor: "#b5f9b4",
    iconColor: "#028000",
  },
  {
    name: "ระบบเช็ค Easy Pass ส่งตัด",
    url: "http://172.20.20.26:5323",
    description: "สำหรับตรวจสอบสถานะการส่งตัด Easy Pass",
    icon: HandCoins,
    bgColor: "#DBEAFE",
    iconColor: "#2563EB",
  },
  {
    name: "Imind + Jira AI Summarizer",
    url: "http://172.20.20.26:5880",
    description: "ระบบสรุปข้อมูลจาก Jira เทียบกับ imind ด้วย AI",
    icon: Bot,
    bgColor: "#FEE2E2",
    iconColor: "#DC2626",
  },
  {
    name: "Admin Web – Monitor Bot Plate VIP",
    url: "http://172.20.20.26:8118",
    description: "สำหรับดูสถานะการทำงานของ Bot Plate VIP",
    icon: FolderOpen,
    bgColor: "#F3E8FF",
    iconColor: "#9333EA",
  },
  {
    name: "Query ข้อมูลประเภทบัญชีสมาชิก",
    url: "http://172.20.20.26:5468",
    description: "สำหรับดึงข้อมูลประเภทบัญชีสมาชิกจากฐานข้อมูล",
    icon: Database,
    bgColor: "#DC2626",
    iconColor: "#FFFFFF",
  },
  {
    name: "Operation Support Dashboard",
    url: "https://192.168.10.100/new-mlpr-operation-support-web/dashboard",
    description: "สำหรับดูแดชบอร์ด Operation Support",
    icon: Activity,
    bgColor: "#144ceb",
    iconColor: "#FFFFFF",
  },
];

function App() {
  const [search, setSearch] = useState("");

  const filteredPortals = portals.filter(
    (item) =>
      item.name.toLowerCase().includes(search.toLowerCase()) ||
      item.description.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-100 via-white to-slate-200">

      {/* Header */}
      <header className="bg-white border-b shadow-sm sticky top-0 z-50 backdrop-blur">

        <div className="max-w-7xl mx-auto px-4 py-6">

        <div className="flex items-center gap-4">

          {/* Logo */}
          <div className="shrink-0">

            <img
              src="/logo2.png"
              alt="Logo"
              className="w-16 h-16 sm:w-20 sm:h-20 object-contain"
            />

          </div>

          {/* Text */}
          <div>

            <h1 className="text-2xl sm:text-3xl font-bold text-slate-800">
              ALL SYSTEM WEB APPLICATION SUPPORT
            </h1>

            <p className="text-slate-500 mt-1 text-sm sm:text-base leading-relaxed max-w-4xl">
              ระบบรวมลิงก์เข้าใช้งานเว็บไซต์ สำหรับทีม Application Support
              เพื่อความสะดวกในการเข้าถึงและจัดการงานต่างๆ
              ได้อย่างรวดเร็วและมีประสิทธิภาพ
            </p>

          </div>

        </div>

      </div>

      </header>

      {/* Content */}
      <main className="max-w-7xl mx-auto px-4 py-8">

        {/* Search */}
        <div className="mb-8 relative">

          <Search
            className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 w-5 h-5"
          />

          <input
            type="text"
            placeholder="ค้นหาเว็บไซต์..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full bg-white border border-slate-300 rounded-2xl pl-12 pr-5 py-4 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          />

        </div>

        {/* Empty State */}
        {filteredPortals.length === 0 && (

          <div className="text-center py-20">

            <div className="text-6xl mb-4">
              🔍
            </div>

            <h2 className="text-2xl font-bold text-slate-700">
              ไม่พบเว็บไซต์
            </h2>

            <p className="text-slate-500 mt-2">
              กรุณาลองค้นหาด้วยคำอื่น
            </p>

          </div>

        )}

        {/* Grid */}
        {filteredPortals.length > 0 && (

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">

            {filteredPortals.map((item, index) => (

              <a
                key={index}
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group bg-white rounded-3xl shadow-md hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 border border-slate-200 overflow-hidden"
              >

                <div className="p-6 h-full flex flex-col">

                  {/* Top */}
                  <div className="flex items-center justify-between mb-5">

                    {/* Icon */}
                    <div
                      className="w-14 h-14 rounded-2xl flex items-center justify-center"
                      style={{
                        backgroundColor: item.bgColor,
                      }}
                    >

                      <item.icon
                        className="w-7 h-7"
                        style={{
                          color: item.iconColor,
                        }}
                      />

                    </div>

                    {/* Status */}
                    {/* <span className="text-xs bg-green-100 text-green-700 px-3 py-1 rounded-full">
                      Online
                    </span> */}

                  </div>

                  {/* Title */}
                  <h2 className="text-lg sm:text-xl font-semibold text-slate-800 group-hover:text-blue-600 transition line-clamp-2">

                    {item.name}

                  </h2>

                  {/* Description */}
                  <p className="text-slate-500 text-sm mt-3 leading-relaxed flex-grow">

                    {item.description}

                  </p>

                  {/* Footer */}
                  <div className="mt-6 flex items-center justify-between">

                    <span className="text-blue-600 font-medium text-sm">
                      เข้าใช้งาน →
                    </span>

                    <span className="text-xs text-slate-400">
                      Open Link
                    </span>

                  </div>

                </div>

              </a>

            ))}

          </div>

        )}

      </main>

    </div>
  );
}

export default App;