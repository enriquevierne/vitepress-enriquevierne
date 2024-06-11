import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "BioDoc",
  description: "Documentação do sistema desenvolvido por DragonFly e Laboratório Biometil, BioSystem.",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: "Home", link: "/" },
      { text: "Examples", link: "/markdown-examples" },
    ],

    sidebar: [
      {
        text: "Getting Started",
        items: [
          { text: "Installation", link: "/markdown-examples" },
          { text: "Database", link: "/api-examples" },
          { text: "Migrate", link: "/migrate" },
        ],
      },
      {
        text: "Pages",
        items: [
          {
            text: "Auth",
            collapsed: true,
            items: [
              {
                text: "ConfirmPassword",
                link: "/auth/confirmPassword",
              },
              {
                text: "ForgotPassword",
                link: "/auth/forgotPassword",
              },
              {
                text: "Login",
                link: "/auth/login",
              },
              {
                text: "ResetPassword",
                link: "/auth/resetPassword",
              },
              {
                text: "VerifyEmail",
                link: "/auth/verifyEmail",
              },
            ],
          },
          {
            text: "Biometik",
            collapsed: true,
            items: [
              {
                text: "Products",
                collapsed: true,
                items: [
                  {
                    text: "Form",
                    link: "/biometik/products/form",
                  },
                  {
                    text: "Index",
                    link: "/biometik/products/index",
                  },
                ],
              },
              {
                text: "PurchaseProducts",
                collapsed: true,
                items: [
                  {
                    text: "Form",
                    link: "/biometik/purchaseProducts/form",
                  },
                ],
              },
              {
                text: "Purchases",
                collapsed: true,
                items: [
                  {
                    text: "ChangeOwner",
                    link: "/purchases/changeOwner",
                  },
                  {
                    text: "Form",
                    link: "/purchases/form",
                  },
                  {
                    text: "Index",
                    link: "/purchases/index",
                  },
                  {
                    text: "IndexProcess",
                    link: "/purchases/indexProcess",
                  },
                  {
                    text: "Print",
                    link: "/purchases/print",
                  },
                  {
                    text: "Process",
                    link: "/purchases/process",
                  },
                  {
                    text: "Show",
                    link: "/purchases/show",
                  },
                  {
                    text: "Tracking",
                    link: "/purchases/tracking",
                  },
                ],
              },
            ],
          },
          {
            text: "CommissionReports",
            collapsed: true,
            items: [
              {
                text: "Full",
                link: "/commissionReports/full",
              },
              {
                text: "Simple",
                link: "/commissionReports/simple",
              },
            ],
          },
          {
            text: "Commissions",
            collapsed: true,
            items: [
              {
                text: "Form",
                link: "/commissions/form",
              },
              {
                text: "Index",
                link: "/commissions/index",
              },
            ],
          },
          {
            text: "Financial",
            collapsed: true,
            items: [
              {
                text: "CustomerSearch",
                link: "/financial/customerSearch",
              },
            ],
          },
          {
            text: "Goals",
            collapsed: true,
            items: [
              {
                text: "Create",
                link: "/goals/create",
              },
              {
                text: "Edit",
                link: "/goals/edit",
              },
              {
                text: "History",
                link: "/goals/history",
              },
              {
                text: "Index",
                link: "/goals/index",
              },
            ],
          },
          {
            text: "Holidays",
            collapsed: true,
            items: [
              {
                text: "Create",
                link: "/holidays/create",
              },
              {
                text: "Edit",
                link: "/holidays/edit",
              },
              {
                text: "Index",
                link: "/holidays/index",
              },
            ],
          },
          {
            text: "Installments",
            collapsed: true,
            items: [
              {
                text: "Form",
                link: "/installments/form",
              },
              {
                text: "Index",
                link: "/installments/index",
              },
              {
                text: "PreviewItau",
                link: "/installments/previewItau",
              },
              {
                text: "PreviewUnicred",
                link: "/installments/previewUnicred",
              },
            ],
          },
          {
            text: "Menus",
            collapsed: true,
            items: [
              {
                text: "Biometik",
                link: "/menus/biometik",
              },
              {
                text: "Commercial",
                link: "/menus/commercial",
              },
              {
                text: "Configurations",
                link: "/menus/configurations",
              },
              {
                text: "Expedition",
                link: "/menus/expedition",
              },
              {
                text: "Financial",
                link: "/menus/financial",
              },
              {
                text: "Outsiders",
                link: "/menus/outsiders",
              },
              {
                text: "Quality",
                link: "/menus/quality",
              },
            ],
          },
          {
            text: "Monthboard",
            collapsed: true,
            items: [
              {
                text: "Form",
                link: "/monthboard/form",
              },
              {
                text: "Index",
                link: "/monthboard/index",
              },
              {
                text: "Show",
                link: "/monthboard/show",
              },
            ],
          },
          {
            text: "ParticleCounter",
            collapsed: true,
            items: [
              {
                text: "Form",
                link: "/particleCounter/form",
              },
            ],
          },
          {
            text: "Permissions",
            collapsed: true,
            items: [
              {
                text: "Index",
                link: "/permissions/index",
              },
            ],
          },
          {
            text: "ProductionOrders",
            collapsed: true,
            items: [
              {
                text: "Index",
                link: "/productionOrders/index",
              },
              {
                text: "Show",
                link: "/productionOrders/show",
              },
            ],
          },
          {
            text: "ProductionPurchases",
            collapsed: true,
            items: [
              {
                text: "Form",
                link: "/productionPurchases/form",
              },
            ],
          },
          {
            text: "Profile",
            collapsed: true,
            items: [
              {
                text: "Partials",
                collapsed: true,
                items: [
                  {
                    text: "UpdatePasswordForm",
                    link: "/profile/partials/updatePasswordForm",
                  },
                  {
                    text: "UpdateProfileInformationForm",
                    link: "/profile/partials/updateProfileInformationForm",
                  },
                ],
              },
              {
                text: "Edit",
                link: "/profile/edit",
              },
            ],
          },
          {
            text: "Purchases",
            collapsed: true,
            items: [
              {
                text: "ChangeOwner",
                link: "/purchases/changeOwner",
              },
              {
                text: "CheckUser",
                link: "/purchases/checkUser",
              },
              {
                text: "Create",
                link: "/purchases/create",
              },
              {
                text: "Edit",
                link: "/purchases/edit",
              },
              {
                text: "FinCheckout",
                link: "/purchases/finCheckout",
              },
              {
                text: "Index",
                link: "/purchases/index",
              },
              {
                text: "IndexProcess",
                link: "/purchases/indexProcess",
              },
              {
                text: "PDF",
                link: "/purchases/pdf",
              },
              {
                text: "Print",
                link: "/purchases/print",
              },
              {
                text: "Process",
                link: "/purchases/process",
              },
              {
                text: "Show",
                link: "/purchases/show",
              },
              {
                text: "Tracking",
                link: "/purchases/tracking",
              },
            ],
          },
          {
            text: "Reports",
            collapsed: true,
            items: [
              {
                text: "GroupCommissions",
                link: "/reports/groupCommissions",
              },
              {
                text: "GroupPurchases",
                link: "/reports/groupPurchases",
              },
              {
                text: "RankClientPurchases",
                link: "/reports/rankClientPurchases",
              },
              {
                text: "RankProductPurchases",
                link: "/reports/rankProductPurchases",
              },
            ],
          },
          {
            text: "Scheduling",
            collapsed: true,
            items: [
              {
                text: "Form",
                link: "/scheduling/form",
              },
              {
                text: "Index",
                link: "/scheduling/index",
              },
              {
                text: "Show",
                link: "/scheduling/show",
              },
            ],
          },
          {
            text: "TV",
            collapsed: true,
            items: [
              {
                text: "Form",
                link: "/tv/form",
              },
              {
                text: "Index",
                link: "/tv/index",
              },
            ],
          },
          {
            text: "Users",
            collapsed: true,
            items: [
              {
                text: "Create",
                link: "/users/create",
              },
              {
                text: "Edit",
                link: "/users/edit",
              },
              {
                text: "Index",
                link: "/users/index",
              },
              {
                text: "Show",
                link: "/users/show",
              },
            ],
          },
          { text: "Dashboard", link: "/dashboard" },
          { text: "Error", link: "/error" },
          { text: "Welcome", link: "/welcome" },
        ],
      },
    ],

    socialLinks: [{ icon: "github", link: "https://github.com/vuejs/vitepress" }],
  },
});
