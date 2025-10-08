function NotAccess() {
    return (
         <div className="h-screen bg-secondary-0">
        <div className="container xl:max-w-screen-xl">
            <div className="sm:max-w-sm flex justify-center pt-10">
                <h1 className="text-xl font-bold text-secondary-400 mb-8">
                    شما به این قسمت دسترسی ندارید 😥
                </h1>
            </div>
        </div>
        </div>        
    );
}

export default NotAccess;