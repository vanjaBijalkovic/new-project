import { categories } from '../constants/categories'
import { skills } from '../constants/skills'
import { technologies } from '../constants/technologies'

export default class ApiService {
  getCategories() {
    return categories;
  }

  getSkills() {
    return skills;
  }

  getTechnologies() {
    return technologies;
  }

  getSelectedSkill(skillId) {
    return skills.find(skill => skill.id === skillId)
  }
}

export const apiService = new ApiService();