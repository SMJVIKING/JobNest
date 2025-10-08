import { useState } from "react";
import { Outlet } from "react-router-dom";
import Header from "./Header";
import { HiX } from "react-icons/hi";

function AppLayout({children}) {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="h-screen grid grid-rows-[auto_1fr] md:grid-cols-[14rem_auto]">
            <div className="col-span-full">
                <Header onMenuClick={() => setIsOpen(true)} />
            </div>

            {/* desktop sidebar*/}
            <div className="hidden md:block">
                {/* <Sidebar /> */}
                {children}
            </div>

            <div className="bg-secondary-100 p-8 overflow-y-auto">
                <div className="mx-auto max-w-screen-lg flex flex-col gap-y-12">
                    <Outlet />
                </div>
            </div>

            {/* mobile sidebar*/}
            {isOpen && (
                <div className="fixed inset-0 z-50 flex justify-end md:hidden">
                    <div
                        className="flex-1 bg-black/50"
                        onClick={() => setIsOpen(false)}
                    />
                    <div className="w-64 bg-secondary-0 shadow-lg h-full relative transform transition-transform duration-300 translate-x-0">
                        <div className="flex-shrink-0 p-2">
                            <button
                                className="text-secondary-500 text-2xl"
                                onClick={() => setIsOpen(false)}
                            >
                                <HiX />
                            </button>
                        </div>
                        <div className="flex-1">
                            {/* <Sidebar /> */}
                            {children}
                        </div>
                    </div>
                </div>
            )}

        </div>
    );
}

export default AppLayout;