<template>
  <v-list two-line>
    <template v-for='(item, index) in lists'>
      <!-- <v-subheader v-if='item.header' :key='item.header'>{{ item.header }}</v-subheader>  -->
      <v-divider v-if='index > 0' inset :key='index * 2'></v-divider>
      <v-list-tile avatar :key='(index * 2) + 1'>
        <v-list-tile-avatar>
          <img :src='item.avatar'>
        </v-list-tile-avatar>
        <v-list-tile-content>
          <v-list-tile-title v-html='item.name'></v-list-tile-title>
          <!-- <v-list-tile-sub-title v-html='item.subtitle'></v-list-tile-sub-title> -->
        </v-list-tile-content>
      </v-list-tile>
    </template>
  </v-list>
</template>

<script>
import * as moment from 'moment';

export default {
  data() {
    return {
      lists: [
        {
          name: 'Supermercado',
          avatar: 'https://randomuser.me/api/portraits/men/78.jpg',
          created: moment('2018-02-16T18:36:12', moment.ISO_8601),
          updated: moment('2018-03-10T05:06:07', moment.ISO_8601),
        },
        {
          name: 'Presentes',
          avatar: 'https://randomuser.me/api/portraits/women/23.jpg',
          created: moment('2018-02-22T14:45:25', moment.ISO_8601),
          updated: moment('2018-03-11T18:06:07', moment.ISO_8601),
        },
        {
          name: 'Casamento',
          avatar: 'https://randomuser.me/api/portraits/women/54.jpg',
          created: moment('2018-03-081T09:32:58', moment.ISO_8601),
          updated: moment('2018-03-11T09:58:07', moment.ISO_8601),
        },
      ],
    };
  },
};
</script>
