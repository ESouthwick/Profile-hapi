import { createNewProfileRoute } from "./createNewProfile";
import { deleteProfileRoute } from "./deleteProfile";
import { getAllProfilesRoute } from "./getAllProfiles";
import { getUserProfile } from "./getProfile";
import { updateProfileRoute } from "./updateProfile";

export default [
    getAllProfilesRoute,
    getUserProfile,
    createNewProfileRoute,
    deleteProfileRoute,
    updateProfileRoute
]; 