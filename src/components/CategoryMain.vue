<template>
<div>
    <h1> {{ title }} </h1>

    <ur>
        <li v-for="(category1, index) in categories" :key="index">
        {{ category1 }}
        </li>
    </ur>


        <h2> Save </h2>

        <label for="name">Name</label>
        <input type="text" 
        name="name" 
        id="name"
        v-model="category.name"
        >

        <label for="description">Description</label>
        <input type="text" 
        name="description" 
        id="description"
        v-model="category.description"
        >

        <label for="img">Image</label>
        <input type="text" 
        name="img" 
        id="img"
        v-model="category.img"
        >
        <button @click="saveNewCategory">Add</button>


        <div class="container">


            <div class="row">

            <div class="col-4">
                <ul>
                    <li v-for="(c,index) in categories" :key="index"
                    @click="selectCategoryByIdex(index)"
                    >
                    {{ c }}
                    </li>
                </ul>


            </div>
            <div class="col-8">

                <h2> Update/Delete</h2>

                {{ category1 }}


<table>
    <thead></thead>
    <tbody>
        <tr>
            <td><label for="name1">Name</label></td>
            <td>
                <input type="text" 
                name="name" 
                id="name1"
                v-model="category1.name"
                >
            </td>
        </tr>
        <tr>
            <td><label for="description1">Description</label></td>
            <td><input type="text" 
                name="description1" 
                id="description"
                v-model="category1.description"
                >
            </td>
        </tr>
        <tr>
            <td><label for="img1">Image</label>
            </td>
            <td><input type="text" 
                name="img" 
                id="img1"
                v-model="category1.img" >
            </td>
        </tr>
        <tr>
            <td><button @click="updateCategory">Update</button> </td>
            <td><button @click="deleteCategory">Delete</button></td>
        </tr>

    </tbody>
</table>


            </div>
            </div>



        </div>
    
</div>
</template>

<script>
import CategoryService from "../service/CategoryService"

export default {
    name: "CaregoryMain",
    data(){
        return{
            title: "Categories",
            categories: [],
            category: {
                id: null,
                name: "",
                description: "",
                img: ""
            },
            category1: "",
            selectIndex: 0
        }
    },
    methods: {
        
        getAllCategories(){
            CategoryService.findAll()
            .then((responce)=>{
                this.categories = responce.data;
                console.log(responce);
            })
            .catch((e)=>console.log(e))
        },

        saveNewCategory(){
            var myData = {
                name: this.category.name,
                description: this.category.description,
                img: this.category.img
            }

            CategoryService.save(myData)
            .then((responce)=>{
                this.categories = responce.data;
                console.log(responce);
                this.getAllCategories();
                this.category = ""
            })
            .catch((e)=>console.log(e))
        },
        
        selectCategoryByIdex(index){
            this.category1 = this.categories[index];
            this.selectIndex = index;
        },


        updateCategory(){
            CategoryService.update(this.category1.id, this.category1)
            .then((responce)=>{
                this.categories = responce.data;
                console.log(responce);
                this.getAllCategories();
            })
            .catch((e)=>console.log(e))
        },
        
        deleteCategory(){
            CategoryService.delete(this.category1.id)
            .then((responce)=>{
                this.categories = responce.data;
                console.log(responce);
                this.getAllCategories();
                this.category1="";
            })
            .catch((e)=>console.log(e));

            for (let index = 0; index < this.categories.length; index++) {
                if(this.category1.id===this.categories[index].id){
                    this.categories.slice(index, 1);
                }
            }
        }
    },
    mounted(){
        this.getAllCategories()
    }
}
</script>

<style scoped>

</style>
