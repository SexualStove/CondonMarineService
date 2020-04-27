<template>
  <div id="AboutUsPage">
    <h1 id="AboutUsTitle">
      Welcome to the American Classic Car Club (Canterbury) Inc
    </h1>
    <p id="AboutUsContent">
      The club was formed during the 1970’s. It continues to be a strong club of like-minded people of all ages, like-minded in that all of our members have a passion for American Classic Cars.
      <br>
      <br>
      Club members are owners of a very wide range of American Classic Cars ranging from the 1930’s to present day models. The cars range from those that are impeccably restored to those that are a work in progress.
      <br>
      <br>
      A Committee of up to eleven members, led by a Club President are elected by members of the club at the A.G.M. The Committee puts much effort in to organising interesting and varied events. Each month we organise a get together. These events range from car cruises to a picnic area or to a restaurant/ hotel. Some events involve answering questions along the way and prizes at the final destinations.
      <br>
      <br>
      We also visit car collections, car shows, support charity events and events which are of interest to club members.
    </p>
    <div v-for="Gallery in ShownBlogs" v-bind:key="Gallery.id">
      <div>
        <h1>{{Gallery.Title}}</h1>
        <img class="Thumbnail" v-bind:src="Gallery.Image" alt="None">
      </div>
      <div class="GalleryImages" v-for="Image in ImageTable" v-bind:key="Image.id">
        <img v-if="parseInt(Image.GalleryLink) === parseInt(Gallery.id)" class="ImageGallery" v-bind:src="Image.Image" alt="None">
      </div>
    </div>
  </div>
</template>

<script>
    import BlogController from '@/services/BlogServices'


    import JQuery from 'jquery';
    let $ = JQuery;


    export default {

        data() {
            return {
                myUrl: 'asdfb',
                blogContent:"",
                blogs: '',
                thumbnail: '',
                TotalBlogSize: 3,
                ShownBlogs: undefined,
                TransferBlogList: undefined,
                Reversed: false,
                ImageTable: undefined,
            }
        },
        methods: {
            async getGalleries() {
                try {

                    const blogs = await BlogController.getAllGallery();
                    const images = await BlogController.getImageTables();
                    console.log(blogs.data.Galleries);

                    this.ImageTable = images.data.Galleries;
                    console.log(this.ImageTable)
                    this.blogs = blogs.data.Galleries;
                    this.ReRollBlogs();
                    this.thumbnail = this.blogs[9].Thumbnail.data;

                    // this.blogContent = blogData.data.blog.Content;
                    // document.getElementById('blog').innerHTML = this.blogContent
                } catch (e) {
                    console.log(e);
                    this.myUrl = e;
                }
            },

            async ReRollBlogs() {

                this.ShownBlogs = this.blogs.slice();
                this.SortNewBlogs();
                //this.SortNewBlogs();
            },
            SortNewBlogs: function() {
                this.ShownBlogs = this.blogs.slice();
                let BlogLength = this.ShownBlogs.length;
                let SearchText = document.getElementById('SearchBlog').value;
                if(this.Reversed) {
                    this.ShownBlogs = this.ShownBlogs.reverse();
                }
                this.Reversed = !this.Reversed;
                let FilterList = [];
                let i = 0;
                for(i=0; i < BlogLength; i++) {
                    if((this.ShownBlogs[i].Title.includes(SearchText) || this.ShownBlogs[i].Blurb.includes(SearchText))) {
                        FilterList.push(this.ShownBlogs[i]);
                        console.log("Added new chunk to list");
                        console.log(FilterList);
                    }
                }
                console.log(FilterList);
                this.ShownBlogs = FilterList.slice();
                for(i=0; i < this.ShownBlogs.length; i++) {
                    this.ShownBlogs[i]["Type"] = i;
                }
                this.TotalBlogSize = 2;

            }
        },
        beforeMount() {
            this.getGalleries()
        },

        computed: {

        },
        mounted() {
            var self = this;
            this.$nextTick(function(){
                window.addEventListener("scroll", function() {
                    self.Scrolled = document.documentElement.scrollTop;
                    if ($(window).scrollTop() + $(window).height() > $(document).height() - 200) {
                        if(self.TotalBlogSize < self.blogs.length) {
                            self.TotalBlogSize += 1;
                        }
                    }
                })
            })
        }
    }
</script>

<style scoped>
  #AboutUsTitle {

      font-family: 'Cinzel', serif;
      font-size: 2.5vw;
    margin: 0% 15% 3% 1%;

  }

#AboutUsPage {
  height: 200vh;
  width: 100vw;
  text-align: left;

}
  #AboutUsContent {
    font-size: 1.2vw;
    font-weight: 300;
    margin: 3% 10% 3% 1%;
    font-family: 'Roboto', sans-serif;
  }
  .Thumbnail {
    width: 50vw;
  }
  .ImageGallery {
    display: inline-block;
    width: 10vw;
  }
  .GalleryImages {
    display: inline-block;
  }
</style>