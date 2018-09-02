import Vuex from 'vuex';
import Vue from 'vue';
import { userService } from '../services/user.service'
import { apiService } from '../services/api.service'

Vue.use(Vuex);

export default new Vuex.Store({
  state : {
    user: {},
    skill: [],
    technologies: [],
    categories: [],
    selectedSkill: {}
  },

  mutations: {
    SET_USER(state, user) {
      state.user = {...user};
    },
    SET_SKILLS(state, skill) {
      state.skill = skill;
    },
    SET_CATEGORIES(state, categories) {
      state.categories = categories;
    },
    SET_TECHNOLOGIES(state, technologies) {
      state.technologies = technologies;
    },
    SET_SKILL(state, skill) {
      state.selectedSkill = skill;
    }
  },
  actions: {
    getUser({ commit }) {
      commit('SET_USER', userService.getUser())
    },
    getCategories({ commit }) {
      commit('SET_CATEGORIES', apiService.getCategories())
    },
    getSkills({ commit }) {
      commit('SET_SKILLS', apiService.getSkills())
    },
    getTechnologies({ commit }) {
      commit('SET_TECHNOLOGIES', apiService.getTechnologies())
    },
    getSkill({ commit }, skillId) {
      commit('SET_SKILL', apiService.getSelectedSkill(skillId));
    },
    updateUser({ commit }, user) {
      commit('SET_USER' , user);
    }
  },
  getters: {
    user: state => state.user,
    skill: state => state.skill,
    technologies: state => state.technologies,
    categories: state => state.categories,
    selectedSkill: state => state.selectedSkill
  },
})