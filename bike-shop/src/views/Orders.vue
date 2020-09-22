<template>
  <div class="products">
    <div class="container h-100">
      <div class="intro h-100">
        <div class="row h-100 justify-content-center align-items-center">
          <div class="col-md-6">
            <h3>Orders Page</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
          </div>
          <div class="col-md-6">
            <img src="../assets/orders.svg" alt="overview image" class="img-fluid" />
          </div>
        </div>
        <br />
        <br />
        <div class="product-test">
          <h3 class="d-inline-block">Product list</h3>
          <button data-toggle="modal" data-target="#product" @click="addNew" class="btn btn-primary float-right">
            Add Product
          </button>
          <div class="table-responsive">
            <table class="table">
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Price</th>
                  <th>Modify</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="product in products">
                  <td>{{ product.name }}</td>

                  <td>{{ product.price }}</td>

                  <td>
                    <button class="btn btn-primary mr-10" data-toggle="modal" data-target="#product" @click="editProduct(product)">
                      Edit
                    </button>
                    <button class="btn btn-danger" @click="deleteProduct(product)">
                      Delete
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>

    <div class="modal fade" id="product" tabindex="-1" role="dialog" aria-labelledby="editLabel" aria-hidden="true">
      <div class="modal-dialog modal-lg" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="editLabel">Edit Product</h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            <div class="row">
              <div class="col-md-8">
                <div class="form-group">
                  <input type="text" placeholder="Product Name" v-model="product.name" class="form-control" />
                </div>

                <div class="form-group">
                  <vue-editor v-model="product.description"></vue-editor>
                </div>
              </div>
              <div class="col-md-4">
                <h4 class="display-6">Product Details</h4>
                <hr />

                <div class="form-group">
                  <input type="text" placeholder="Product price" v-model="product.price" class="form-control" />
                </div>

                <div class="form-group">
                  <input type="text" placeholder="Product tags" v-model="tag" @keyup.enter="addTag" class="form-control" />

                  <div class="d-flex">
                    <p v-for="tag in product.tags" class="p-1">
                      <span>{{ tag }}</span>
                    </p>
                  </div>
                </div>

                <div class="form-group">
                  <label for="product_image">Product Images</label>
                  <input type="file" @change="uploadImage" class="form-control" />
                </div>

                <div class="form-group d-flex">
                  <div class="p-1" v-for="(image, index) in product.images">
                    <div class="img-wrapp">
                      <img :src="image" class="p-1" alt="upload_image" width="80px" />
                      <span class="delete-img" @click="deleteImage(image, index)">X</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-dismiss="modal">
              Close
            </button>
            <button @click="addProduct()" type="button" class="btn btn-primary" v-if="modal == 'new'">
              Save changes
            </button>
            <button @click="updateProduct()" type="button" class="btn btn-primary" v-if="modal == 'edit'">
              Apply changes
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { fb, db } from "../firebase";
import { VueEditor } from "vue2-editor";
export default {
  name: "Products",
  components: {
    VueEditor,
  },
  props: {
    msg: String,
  },
  data() {
    return {
      products: [],
      product: {
        name: null,
        description: null,
        price: null,
        tags: [],
        images: [],
      },
      activeItem: null,
      modal: null,
      tag: null,
    };
  },
  firestore() {
    return {
      products: db.collection("products"),
    };
  },
  methods: {
    deleteImage(img, index) {
      let image = fb.storage().refFromURL(img);
      this.product.images.splice(index, 1);
      image
        .delete()
        .then(function() {
          console.log("image deleted");
        })
        .catch(function(error) {
          console.log("an error occurred");
        });
    },
    addTag() {
      this.product.tags.push(this.tag);
      this.tag = "";
    },
    uploadImage(e) {
      if (e.target.files[0]) {
        let file = e.target.files[0];

        var storageRef = fb.storage().ref("products/" + Math.random() + "_" + file.name);

        let uploadTask = storageRef.put(file);

        uploadTask.on(
          "state_changed",
          (snapshot) => {},
          (error) => {},
          () => {
            uploadTask.snapshot.ref.getDownloadURL().then((downloadURL) => {
              this.product.images.push(downloadURL);
            });
          }
        );
      }
    },
    reset() {
      this.product = {
        name: null,
        description: null,
        price: null,
        tags: [],
        images: [],
      };
    },
    addNew() {
      this.modal = "new";
      this.reset();
      //Swal.fire("Added!", "Your product has been added.", "success");
    },
    updateProduct() {
      this.$firestore.products.doc(this.product.id).update(this.product);

      Swal.fire("Updated!", "Your product has been updated.", "success");
    },
    editProduct(product) {
      this.modal = "edit";
      this.product = product;
      this.activeItem = product[".key"];
    },
    deleteProduct(doc) {
      Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        type: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!",
      }).then((result) => {
        if (result.value) {
          this.$firestore.products.doc(doc.id).delete();
          Swal.fire("Deleted!", "Yoour file has been deleted.", "success");
        }
      });
    },
    addProduct() {
      this.$firestore.products.add(this.product);
    },
  },
  created() {
    //this.readData();
  },
};
</script>

<style scoped lang="scss">
.products {
  margin: 0 80px;
}
.mr-10 {
  margin-right: 10px;
}
.img-wrapp {
  position: relative;
}
.img-wrapp .delete-img {
  position: absolute;
  top: -14px;
  left: -2px;
}
.img-wrapp .delete-img:hover {
  cursor: pointer;
}
</style>
