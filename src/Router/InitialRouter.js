import { client } from "../../serviceEndPoints.js";
import { DEVELOPER_LIST } from '../Query/InitialRouter.js'

 const PostRoutes = (req,res) => {
    try {
        res.sendStatus(200)
    } catch (error) {
        console.log(error);
    }
}

const GetRoutes = async (req,res) => {
    try {
       const response = await client.request(DEVELOPER_LIST)
       console.log(response)
        res.send(response.developers)
    } catch (error) {
        console.log(error);
    }
}

export {PostRoutes,GetRoutes}