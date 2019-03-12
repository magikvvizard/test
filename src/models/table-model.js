export default class TableModel {

    async getData(){

        const res = await fetch('data/data.txt');

        if(!res.ok) {
            throw new Error(res.status); // 404
        }

        const data =  await res.json();
        return data;
    }


}
