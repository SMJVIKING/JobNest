import UsersTable from "../features/admin/users/UsersTable"

export default function Users() {
    return (
        <div>
            <h1 className="font-black text-secondary-700 tex-xl mb-8">
                کاربران
            </h1>
            <UsersTable />
        </div>
    )
}