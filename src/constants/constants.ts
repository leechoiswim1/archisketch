export const RENDER_OPTIONS = {
  default: { value: 'allRender', content: '모든 랜더샷' },
  options: [
    { value: 'FPView', content: '일인칭 뷰어' },
    { value: 'TopView', content: '탑 뷰' },
    { value: 'panorama', content: '파노라마' },
  ],
};

export const IMAGE_QUALITY_OPTIONS = {
  default: { value: 'allQuality', content: '모든 화질' },
  options: [
    { value: 'standard', content: 'Standard' },
    { value: '2K', content: '2K' },
    { value: '3K', content: '3K' },
    { value: '4K', content: '4K' },
  ],
};
