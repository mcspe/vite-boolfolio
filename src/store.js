import { reactive } from "vue";

export const store = reactive({
  apiEndPoint: 'http://127.0.0.1:8000/api/projects',
  projectsApi: '/',
  typesApi: '/types',
  technologiesApi: '/technologies',
  imageApi: '/image',
  projectsApiResult: null,
  detailsApiResult: null,
  typesApiResult: null,
  technologiesApiResult: null,
  imgPath : null
});