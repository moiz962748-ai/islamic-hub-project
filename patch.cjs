const fs = require('fs');
let content = fs.readFileSync('src/components/layout/Navbar.tsx', 'utf8');

const desktopTarget = `<button className="flex items-center gap-1 px-3 py-2 text-sm font-medium text-slate-700 hover:text-emerald-700 transition-colors rounded-md hover:bg-slate-50 focus:outline-none">
                  {menu.title}
                  <ChevronDown className="w-4 h-4 text-slate-400 group-hover:text-emerald-600 transition-transform duration-200 group-hover:-rotate-180" />
                </button>`;

const desktopReplacement = `{menu.href ? (
                  <Link href={menu.href} className="flex items-center gap-1 px-3 py-2 text-sm font-medium text-slate-700 hover:text-emerald-700 transition-colors rounded-md hover:bg-slate-50 focus:outline-none">
                    {menu.title}
                    <ChevronDown className="w-4 h-4 text-slate-400 group-hover:text-emerald-600 transition-transform duration-200 group-hover:-rotate-180" />
                  </Link>
                ) : (
                  <button className="flex items-center gap-1 px-3 py-2 text-sm font-medium text-slate-700 hover:text-emerald-700 transition-colors rounded-md hover:bg-slate-50 focus:outline-none">
                    {menu.title}
                    <ChevronDown className="w-4 h-4 text-slate-400 group-hover:text-emerald-600 transition-transform duration-200 group-hover:-rotate-180" />
                  </button>
                )}`;

content = content.replace(desktopTarget, desktopReplacement);

const mobileTarget = `<button
                onClick={() => toggleMobileDropdown(menu.title)}
                className="w-full flex items-center justify-between px-3 py-3 text-base font-medium text-slate-900 rounded-md hover:bg-slate-50 transition-colors"
              >
                {menu.title}
                <ChevronDown className={\`w-5 h-5 text-slate-500 transition-transform duration-200 \${openMobileDropdown === menu.title ? '-rotate-180' : ''}\`} />
              </button>`;

const mobileReplacement = `{menu.href ? (
                <div className="flex w-full">
                  <Link href={menu.href} className="flex-1 flex items-center px-3 py-3 text-base font-medium text-slate-900 rounded-l-md hover:bg-slate-50 transition-colors">
                    {menu.title}
                  </Link>
                  <button
                    onClick={() => toggleMobileDropdown(menu.title)}
                    className="flex items-center justify-center px-4 py-3 text-slate-900 rounded-r-md hover:bg-slate-50 transition-colors"
                  >
                    <ChevronDown className={\`w-5 h-5 text-slate-500 transition-transform duration-200 \${openMobileDropdown === menu.title ? '-rotate-180' : ''}\`} />
                  </button>
                </div>
              ) : (
                <button
                  onClick={() => toggleMobileDropdown(menu.title)}
                  className="w-full flex items-center justify-between px-3 py-3 text-base font-medium text-slate-900 rounded-md hover:bg-slate-50 transition-colors"
                >
                  {menu.title}
                  <ChevronDown className={\`w-5 h-5 text-slate-500 transition-transform duration-200 \${openMobileDropdown === menu.title ? '-rotate-180' : ''}\`} />
                </button>
              )}`;

content = content.replace(mobileTarget, mobileReplacement);
fs.writeFileSync('src/components/layout/Navbar.tsx', content);
