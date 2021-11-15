import cookie from 'cookie'

export default async function handleLogOut(req, res) {
    if (req.method === 'DELETE') {
        const options = {
            secure: process.env.NODE_ENV !== "development",
            httpOnly: true,
            sameSite: "strict",
            path: "/",
            expired: true,
          };
        res.setHeader(
            "set-cookie",
            cookie.serialize("jwt", 'expired', options)
        )
        res.status(200).json({message: "Logged out succesfully"})
        
    } else {
        return res.status(400).json({ message: "Invalid Request Method" })
    }
}