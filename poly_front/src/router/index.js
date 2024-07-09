// src/router/index.js
import { createRouter, createWebHistory } from "vue-router";
import AcceuilView from "../views/AcceuilView.vue";
import PresentationView from "../views/PresentationView.vue";
import SpecialiteView from "../views/SpecialiteView.vue";
import MedecinView from "../views/MedecinView.vue";
import PriseView from "../views/PriseView.vue";
import BlogView from "../views/BlogView.vue";
import ContactView from "../views/ContactView.vue";
import BlogDetail from "../views/BlogDetail.vue";
import AdminView from "../views/admin/AdminView.vue";

const routes = [
  {
    path: "/",
    name: "Acceuil",
    component: AcceuilView,
  },
  {
    path: "/presentation",
    name: "Presentation",
    component: PresentationView,
  },
  {
    path: "/specialites",
    name: "Specialites",
    component: SpecialiteView,
  },
  {
    path: "/medecins",
    name: "Medecins",
    component: MedecinView,
  },
  {
    path: "/prise-en-charge",
    name: "Prise",
    component: PriseView,
  },
  {
    path: "/blog",
    name: "Blog",
    component: BlogView,
  },
  {
    path: "/contact",
    name: "Contact",
    component: ContactView,
  },
  {
    path: "/admin",
    name: "Admin",
    component: AdminView,
    meta: { hideNavbarFooter: true },
  },
  {
    path: "/blog/:id",
    name: "BlogDetail",
    component: BlogDetail,
    props: true,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
