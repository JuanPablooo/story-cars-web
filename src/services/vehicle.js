import axios from './instance-axios';


const RESOURCE = '/vehicle';

const service = {
    list: async () => await axios.get(RESOURCE),
    findOne: async ( id ) => await axios.get(RESOURCE + '/'+ id),
    save: async ( vehicle ) => await axios.post(RESOURCE, vehicle),
    update: async ( vehicle ) => await axios.put(RESOURCE, vehicle)
}
export default service ;
