<template>
  <div>
    <v-list two-line>
      <v-subheader :key='"recent"'>Recentes</v-subheader>
      <template v-for='(item, index) in recent'>
        <v-divider v-if='index > 0' inset :key='"divider" + item.id'></v-divider>
        <v-list-tile avatar :key='item.id'>
          <v-list-tile-avatar>
            <img :src='item.avatar'>
          </v-list-tile-avatar>
          <v-list-tile-content>
            <v-list-tile-title v-html='item.name'></v-list-tile-title>
            <!-- <v-list-tile-sub-title v-html='item.subtitle'></v-list-tile-sub-title> -->
          </v-list-tile-content>
        </v-list-tile>
      </template>
      <v-subheader :key='"previous"'>Anteriores</v-subheader>
      <template v-for='(item, index) in older'>
        <!-- <v-subheader v-if='item.header' :key='item.header'>{{ item.header }}</v-subheader>  -->
        <v-divider v-if='index > 0' inset :key='"divider" + item.id'></v-divider>
        <v-list-tile avatar :key='item.id'>
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
    <v-fab-transition>
      <v-btn
        class="accent"
        dark
        fab
        fixed
        bottom
        right
    >
        <v-icon>add</v-icon>
      </v-btn>
    </v-fab-transition>
  </div>
</template>

<script>
import * as moment from 'moment';

export default {
  data() {
    return {
      lists: [
        {
          id: 2,
          name: 'Supermercado',
          avatar: 'https://randomuser.me/api/portraits/men/78.jpg',
          created: moment('2018-02-16T18:36:12', moment.ISO_8601),
          updated: moment('2018-03-10T05:06:07', moment.ISO_8601),
        },
        {
          id: 1,
          name: 'Presentes',
          avatar: 'https://randomuser.me/api/portraits/women/23.jpg',
          created: moment('2018-02-22T14:45:25', moment.ISO_8601),
          updated: moment('2018-03-11T18:06:07', moment.ISO_8601),
        },
        {
          id: 3,
          name: 'Casamento',
          avatar: 'https://randomuser.me/api/portraits/women/54.jpg',
          created: moment('2018-03-081T09:32:58', moment.ISO_8601),
          updated: moment('2018-03-11T09:58:07', moment.ISO_8601),
        },
        {
          id: 8,
          name: 'Material escolar',
          avatar: 'https://randomuser.me/api/portraits/women/15.jpg',
          created: moment('2018-02-171T15:17:58', moment.ISO_8601),
          updated: moment('2018-02-26T11:19:07', moment.ISO_8601),
        },
      ],
    };
  },
  computed: {
    ordered() {
      return this.lists
        .sort((a, b) => a.updated.isSameOrBefore(b.updated));
    },
    recent() {
      return this.ordered.slice(0, 2);
    },
    older() {
      return this.ordered
        .slice(2)
        .sort((a, b) => a.name >= b.name);
    },
  },
};
</script>
