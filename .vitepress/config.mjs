import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "BioDoc",
  description: "Documentação do sistema desenvolvido por DragonFly e Laboratório Biometil, BioSystem.",
  themeConfig: {
    outline: {
      level: "deep",
      label: "Neste página",
    },
    search: {
      provider: "local",
    },
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
        collapsed: true,
        items: [
          {
            text: "Auth",
            collapsed: true,
            items: [
              {
                text: "ConfirmPassword",
                link: "pages/auth/confirmPassword",
              },
              {
                text: "ForgotPassword",
                link: "pages/auth/forgotPassword",
              },
              {
                text: "Login",
                link: "pages/auth/login",
              },
              {
                text: "ResetPassword",
                link: "pages/auth/resetPassword",
              },
              {
                text: "VerifyEmail",
                link: "pages/auth/verifyEmail",
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
                    link: "pages/biometik/products/form",
                  },
                  {
                    text: "Index",
                    link: "pages/biometik/products/index",
                  },
                ],
              },
              {
                text: "PurchaseProducts",
                collapsed: true,
                items: [
                  {
                    text: "Form",
                    link: "pages/biometik/purchaseProducts/form",
                  },
                ],
              },
              {
                text: "Purchases",
                collapsed: true,
                items: [
                  {
                    text: "ChangeOwner",
                    link: "pages/biometik/purchases/changeOwner",
                  },
                  {
                    text: "Form",
                    link: "pages/biometik/purchases/form",
                  },
                  {
                    text: "Index",
                    link: "pages/biometik/purchases/index",
                  },
                  {
                    text: "IndexProcess",
                    link: "pages/biometik/purchases/indexProcess",
                  },
                  {
                    text: "Print",
                    link: "pages/biometik/purchases/print",
                  },
                  {
                    text: "Process",
                    link: "pages/biometik/purchases/process",
                  },
                  {
                    text: "Show",
                    link: "pages/biometik/purchases/show",
                  },
                  {
                    text: "Tracking",
                    link: "pages/biometik/purchases/tracking",
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
                link: "pages/commissionReports/full",
              },
              {
                text: "Simple",
                link: "pages/commissionReports/simple",
              },
            ],
          },
          {
            text: "Commissions",
            collapsed: true,
            items: [
              {
                text: "Form",
                link: "pages/commissions/form",
              },
              {
                text: "Index",
                link: "pages/commissions/index",
              },
            ],
          },
          {
            text: "Financial",
            collapsed: true,
            items: [
              {
                text: "CustomerSearch",
                link: "pages/financial/customerSearch",
              },
            ],
          },
          {
            text: "Goals",
            collapsed: true,
            items: [
              {
                text: "Create",
                link: "pages/goals/create",
              },
              {
                text: "Edit",
                link: "pages/goals/edit",
              },
              {
                text: "History",
                link: "pages/goals/history",
              },
              {
                text: "Index",
                link: "pages/goals/index",
              },
            ],
          },
          {
            text: "Holidays",
            collapsed: true,
            items: [
              {
                text: "Create",
                link: "pages/holidays/create",
              },
              {
                text: "Edit",
                link: "pages/holidays/edit",
              },
              {
                text: "Index",
                link: "pages/holidays/index",
              },
            ],
          },
          {
            text: "Installments",
            collapsed: true,
            items: [
              {
                text: "Form",
                link: "pages/installments/form",
              },
              {
                text: "Index",
                link: "pages/installments/index",
              },
              {
                text: "PreviewItau",
                link: "pages/installments/previewItau",
              },
              {
                text: "PreviewUnicred",
                link: "pages/installments/previewUnicred",
              },
            ],
          },
          {
            text: "Menus",
            collapsed: true,
            items: [
              {
                text: "Biometik",
                link: "pages/menus/biometik",
              },
              {
                text: "Commercial",
                link: "pages/menus/commercial",
              },
              {
                text: "Configurations",
                link: "pages/menus/configurations",
              },
              {
                text: "Expedition",
                link: "pages/menus/expedition",
              },
              {
                text: "Financial",
                link: "pages/menus/financial",
              },
              {
                text: "Outsiders",
                link: "pages/menus/outsiders",
              },
              {
                text: "Quality",
                link: "pages/menus/quality",
              },
            ],
          },
          {
            text: "Monthboard",
            collapsed: true,
            items: [
              {
                text: "Form",
                link: "pages/monthboard/form",
              },
              {
                text: "Index",
                link: "pages/monthboard/index",
              },
              {
                text: "Show",
                link: "pages/monthboard/show",
              },
            ],
          },
          {
            text: "ParticleCounter",
            collapsed: true,
            items: [
              {
                text: "Form",
                link: "pages/particleCounter/form",
              },
            ],
          },
          {
            text: "Permissions",
            collapsed: true,
            items: [
              {
                text: "Index",
                link: "pages/permissions/index",
              },
            ],
          },
          {
            text: "ProductionOrders",
            collapsed: true,
            items: [
              {
                text: "Index",
                link: "pages/productionOrders/index",
              },
              {
                text: "Show",
                link: "pages/productionOrders/show",
              },
            ],
          },
          {
            text: "ProductionPurchases",
            collapsed: true,
            items: [
              {
                text: "Form",
                link: "pages/productionPurchases/form",
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
                    link: "pages/profile/partials/updatePasswordForm",
                  },
                  {
                    text: "UpdateProfileInformationForm",
                    link: "pages/profile/partials/updateProfileInformationForm",
                  },
                ],
              },
              {
                text: "Edit",
                link: "pages/profile/edit",
              },
            ],
          },
          {
            text: "Purchases",
            collapsed: true,
            items: [
              {
                text: "ChangeOwner",
                link: "pages/purchases/changeOwner",
              },
              {
                text: "CheckUser",
                link: "pages/purchases/checkUser",
              },
              {
                text: "Create",
                link: "pages/purchases/create",
              },
              {
                text: "Edit",
                link: "pages/purchases/edit",
              },
              {
                text: "FinCheckout",
                link: "pages/purchases/finCheckout",
              },
              {
                text: "Index",
                link: "pages/purchases/index",
              },
              {
                text: "IndexProcess",
                link: "pages/purchases/indexProcess",
              },
              {
                text: "PDF",
                link: "pages/purchases/pdf",
              },
              {
                text: "Print",
                link: "pages/purchases/print",
              },
              {
                text: "Process",
                link: "pages/purchases/process",
              },
              {
                text: "Show",
                link: "pages/purchases/show",
              },
              {
                text: "Tracking",
                link: "pages/purchases/tracking",
              },
            ],
          },
          {
            text: "Reports",
            collapsed: true,
            items: [
              {
                text: "GroupCommissions",
                link: "pages/reports/groupCommissions",
              },
              {
                text: "GroupPurchases",
                link: "pages/reports/groupPurchases",
              },
              {
                text: "RankClientPurchases",
                link: "pages/reports/rankClientPurchases",
              },
              {
                text: "RankProductPurchases",
                link: "pages/reports/rankProductPurchases",
              },
            ],
          },
          {
            text: "Scheduling",
            collapsed: true,
            items: [
              {
                text: "Form",
                link: "pages/scheduling/form",
              },
              {
                text: "Index",
                link: "pages/scheduling/index",
              },
              {
                text: "Show",
                link: "pages/scheduling/show",
              },
            ],
          },
          {
            text: "TV",
            collapsed: true,
            items: [
              {
                text: "Form",
                link: "pages/tv/form",
              },
              {
                text: "Index",
                link: "pages/tv/index",
              },
            ],
          },
          {
            text: "Users",
            collapsed: true,
            items: [
              {
                text: "Create",
                link: "pages/users/create",
              },
              {
                text: "Edit",
                link: "pages/users/edit",
              },
              {
                text: "Index",
                link: "pages/users/index",
              },
              {
                text: "Show",
                link: "pages/users/show",
              },
            ],
          },
          { text: "Dashboard", link: "pages/dashboard" },
          { text: "Error", link: "pages/error" },
          { text: "Welcome", link: "pages/welcome" },
        ],
      },
      {
        text: "Models",
        collapsed: true,
        items: [
          {
            text: "BiometikProduct",
            link: "/models/biometikProduct",
          },
          {
            text: "BiometikPurchase",
            link: "/models/biometikPurchase",
          },
          {
            text: "BiometikPurchaseFile",
            link: "/models/biometikPurchaseFile",
          },
          {
            text: "BiometikPurchaseProduct",
            link: "/models/biometikPurchaseProduct",
          },
          {
            text: "Commission",
            link: "/models/commission",
          },
          {
            text: "Goal",
            link: "/models/goal",
          },
          {
            text: "Holiday",
            link: "/models/holiday",
          },
          {
            text: "Installment",
            link: "/models/installment",
          },
          {
            text: "Monthboard",
            link: "/models/monthboard",
          },
          {
            text: "NonPayment",
            link: "/models/nonPayment",
          },
          {
            text: "Permission",
            link: "/models/permission",
          },
          {
            text: "ProductionOrder",
            link: "/models/productionOrder",
          },
          {
            text: "ProductionPurchase",
            link: "/models/productionPurchase",
          },
          {
            text: "Purchase",
            link: "/models/purchase",
          },
          {
            text: "PurchaseFile",
            link: "/models/purchaseFile",
          },
          {
            text: "PurchaseLog",
            link: "/models/purchaseLog",
          },
          {
            text: "Report",
            link: "/models/report",
          },
          {
            text: "Scheduling",
            link: "/models/scheduling",
          },
          {
            text: "TvConfig",
            link: "/models/tvConfig",
          },
          {
            text: "User",
            link: "/models/user",
          },
        ],
      },
    ],

    socialLinks: [{ icon: "github", link: "https://github.com/vuejs/vitepress" }],
  },
});
