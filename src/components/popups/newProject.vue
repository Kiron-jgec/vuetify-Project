<template>
    <div class="popup">




    
   <v-row justify="center">
    <v-btn
      color="primary"
      dark
      @click.stop="dialog = true"
    >
      Add a New Project
    </v-btn>

    <v-dialog
      v-model="dialog"
      max-width="600"
     
    >
      <v-card>
        <v-card-title class="headline">
          Create a new project
        </v-card-title>

        <v-card-text>
         
         <v-form class="px-3" ref="form">

           <v-text-field  prepend-icon="mdi-folder" label="Project Name" v-model="projectName"
           :rules="inputRules"
           
           
           ></v-text-field>
          
           <v-textarea prepend-icon="mdi-pencil" label="About Project" v-model="aboutProject" :rules="inputRules"></v-textarea>

<v-menu
        v-model="menu2"
        :close-on-content-click="false"
        :nudge-right="40"
        transition="scale-transition"
        offset-y
        min-width="290px"
        
      >
        <template v-slot:activator="{ on, attrs }">
          <v-text-field
            v-model="date"
            label="Due Date"
            prepend-icon="mdi-calendar"
            readonly
            v-bind="attrs"
            v-on="on"
            
          ></v-text-field>
        </template>
        <v-date-picker
          v-model="date"
          @input="menu2 = false"
        ></v-date-picker>
      </v-menu>





    <v-btn text class="success mx-0 mt-3" @click="submit" :loading="btnloaing">Add Project</v-btn>
         </v-form>
        </v-card-text>
<!-- 
        <v-card-actions>
          <v-spacer></v-spacer>

         

        
        </v-card-actions> -->
      </v-card>
    </v-dialog>
  </v-row>
    </div>
</template>

<script>



  export default {
    data () {
      return {
        dialog: false,
        projectName:null,
        aboutProject:null,
        date:"",
      
         menu2: false,

         inputRules:[
          value => !!value || 'Required.',
          value => (value && value.length >= 3) || 'Min 3 characters',
         ],
         btnloaing:false,
        
      }
    },
    methods:{
      submit()
      {
        this.btnloaing=true;
 if(this.$refs.form.validate())
 {
        console.log(this.projectName,this.aboutProject)
        this.btnloaing=false;
        this.dialog=false;
        this.$emit('projectAdded')
 }   

      }
    },
 
  }
</script>