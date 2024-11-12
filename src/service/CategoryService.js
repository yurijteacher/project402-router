import http from "@/http-common"

class CategoryService{
    
    findAll(){
        return http.get("/category");
    }

    save(data){
        return http.post("/category", data);
    }

    update(id, data){
        return http.put(`/category/${id}`, data);
    }

    delete(id) {
        return http.delete(`/category/${id}`);
    }

}

export default new CategoryService();