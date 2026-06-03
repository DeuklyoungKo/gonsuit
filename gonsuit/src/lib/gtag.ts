// GA4 이벤트 추적 유틸리티

declare global {
  interface Window {
    gtag: (...args: any[]) => void;
  }
}

// 메뉴 클릭 추적
export const trackMenuClick = (menuName: string) => {
  if (typeof window !== "undefined" && window.gtag) {
    window.gtag("event", "menu_click", {
      menu_name: menuName,
    });
  }
};

// 개발 상품 카드 클릭 추적
export const trackProductClick = (productName: string, productStatus: string) => {
  if (typeof window !== "undefined" && window.gtag) {
    window.gtag("event", "product_click", {
      product_name: productName,
      product_status: productStatus,
    });
  }
};

// 문의 폼 제출 추적
export const trackContactSubmit = (category: string) => {
  if (typeof window !== "undefined" && window.gtag) {
    window.gtag("event", "contact_submit", {
      contact_category: category,
    });
  }
};

// CTA 버튼 클릭 추적
export const trackCtaClick = (buttonName: string, location: string) => {
  if (typeof window !== "undefined" && window.gtag) {
    window.gtag("event", "cta_click", {
      button_name: buttonName,
      location: location,
    });
  }
};

// 외부 링크 클릭 추적
export const trackExternalLinkClick = (linkName: string, url: string) => {
  if (typeof window !== "undefined" && window.gtag) {
    window.gtag("event", "external_link_click", {
      link_name: linkName,
      url: url,
    });
  }
};
