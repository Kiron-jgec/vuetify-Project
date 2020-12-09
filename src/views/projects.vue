<template>
    <div class="projects">
        <h1 class="subheading grey--text ma-3">My Projects</h1>
    




<v-container class="my-5">
      <v-expansion-panels accordion>
      <v-expansion-panel
        v-for="(item,i) in myProject"
        :key="i"
      >
        <v-expansion-panel-header> {{item.title}} </v-expansion-panel-header>
        <v-expansion-panel-content class="px-2 grey--text">
            <div class="font-weigth-bold">
               <strong>Due by {{item.due}}</strong> 
            </div>
            <div>
                {{item.disCrip}}  
            </div>
   
        </v-expansion-panel-content>
      </v-expansion-panel>
    </v-expansion-panels>
</v-container>


    </div>
</template>

<script>
export default {
    data()
    {
        return{
              tableData: [
        {
          title: "Turn it",
          person: "Kiron",
          due: "21 Jan 2019",
          status: "Complated",
          disCrip:" Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
        },
        {
          title: "Bymond",
          person: "Kiron, Ayan",
          due: "20 Feb 2020",
          status: "Ongoing",
          disCrip:" Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
        },
        {
          title: "Btmond meet",
          person: "Kiron",
          due: "30 Nov 2020",
          status: "Ongoing",
             disCrip:" Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
        },
        {
          title: "Octopas LMS",
          person: "Sahil",
          due: "2 Dec 2020",
          status: "Complated",
             disCrip:" Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
        },
        {
          title: "Mem-land",
          person: "Injamamul Hoque",
          due: "25 July 2020",
          status: "Open",
             disCrip:" Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
        },
      ],
        }
    },

    computed:{
        myProject()
        {
return this.tableData.filter(
    project=>{
        return project.person ==='Kiron'
    }
)
        }
    }
}
</script>