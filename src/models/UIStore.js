/**
 * Created by rbachleitner on 5/24/17.
 */

import { extendObservable, autorun } from "mobx";
import PapersModel from './PapersModel';
import BubbleModel from './BubbleModel';
import GroupedSVGEntities from './GroupedSVGEntities';
import logicStore from './logicStore';

class UIStore {
  constructor(initialState) {
    let papersStore = new PapersModel(initialState);
    let bubblesStore = new GroupedSVGEntities(initialState, BubbleModel);
    this.isZoomed = false;
    this.papersStore = papersStore;
    this.bubblesStore = bubblesStore;
    extendObservable(this, {
      data : { areas: initialState.areas },
      svgWidth: 900,
      svgHeight: 900,
      forceSimParameters: {
        manyBodyForceStrength: 1000,
        collisionForceRadius: 100,
        bubblesAlphaMin: 0.8,
        papersAlphaMin: 0.8,
        centerXForceStrength: 0.5,
        centerYForceStrength: 0.5,
      },
      paperZoomFactor: 2.,
      bubbleCenterOffset: 20,
      paperWidth: 26,
      paperHeight: 40,
      forceSimIsDone: false,
      zoomFactor: 1.,
      translationVecX: 0.,
      translationVecY: 0.,
      searchString: "",
      get extendedSearchString() {
        return this.searchString + "extended";
      },
      set extendedSearchString(value) {
        this.searchString = value + "extended";
      }
    });

    }

    disposer()
    {
      autorun(() => {
        if ((this.papersStore.hasSelectedEntities ||
            this.bubblesStore.hasSelectedEntities)) {
          this.isZoomed = true;
          let node = this.bubblesStore.selectedEntities;
          if (node.length > 0) logicStore.updateZoomState(node[0], this);
        } else if (!(this.papersStore.hasSelectedEntities && this.bubblesStore.hasSelectedEntities)
            && this.isZoomed === true) {
          this.isZoomed = false;
          logicStore.resetZoomState(this);
        }
      });
    }

  resetPaperFlags() {
    this.papersStore.entities.forEach((paper) =>
    {
      paper.selected = false;
      paper.listvisible = true;
      paper.clicked = false;
    });
  }

}

export default UIStore;
