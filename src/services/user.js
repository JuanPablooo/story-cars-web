import axios from './instance-axios';


const RESOURCE = '/user';

const service = {
    list: async () => await axios.get(RESOURCE),
    findOne: async ( id ) => await axios.get(RESOURCE + '/'+ id),
    save: async ( user ) => await axios.post(RESOURCE, user),
    update: async ( user ) => await axios.put(RESOURCE, user)
}
export default service ;
