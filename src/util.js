import Axios from "axios";

const findGitHubUser = async (username) => {
    const apiUrl = 'https://api.github.com/users';
    const result = await Axios.get(`${apiUrl}/${username}`);
    if (result && result.status === 200 ) {
        return result.data;
    } else {
        throw new Error('Error with the api request');
    }
};

const  getMulpleUsers = async (usersList=[]) => {
    if(!usersList.length) { return []; }
    const promises = usersList.map(usr => findGitHubUser(usr) );
    return Promise.all(promises);
};

const util = {
    findGitHubUser,
    getMulpleUsers,
};

export default util;