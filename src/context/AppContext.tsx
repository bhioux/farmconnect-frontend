import { createContext, useState, ReactNode  } from "react";

type NavItem = {
    name: string;
    href: string;
};

// Define the context type
type AppContextType = {
    nav: NavItem[];
};


export const AppContext = createContext<AppContextType | undefined>(undefined);

export default function AppProvider({children}: { children: ReactNode }){
    const [nav, setNav] = useState<NavItem[]>([
        { name: 'Product', href: '#' },
        { name: 'Features', href: '#' },
        { name: 'Marketplace', href: '#' },
        { name: 'Company', href: '#' },
    ]);

      return (
        <AppContext.Provider value={{ nav }}>
            {children}
        </AppContext.Provider>
    );
}