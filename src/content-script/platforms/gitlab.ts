import Renderer from './renderer'

// FIXME: GitLab has switched to dynamic loading, can't find DOM at first time
export default class GitLabRenderer extends Renderer {
  getContainer() {
    return document.querySelector('.blob-content .code')
  }

  getFontDOM() {
    return this.$container.querySelector('span[class]:not(.line)')
  }

  getLineWidthAndHeight() {
    const { width, height } = (document.querySelector('#LC1') as HTMLElement).getBoundingClientRect()
    return { width, height }
  }

  getPadding() {
    return {
      left: 10,
      top: 10,
    }
  }

  getTabSize() {
    return 8
  }
}
