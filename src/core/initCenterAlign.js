/*
 * @Author: 秦少卫
 * @Date: 2023-02-05 10:30:39
 * @LastEditors: 秦少卫
 * @LastEditTime: 2023-02-09 13:19:02
 * @Description: 居中方式
 */

import { fabric } from 'fabric';

class CenterAlign {
  constructor(canvas) {
    this.canvas = canvas;
  }

  centerH(workspace, object) {
    return this.canvas._centerObject(
      object,
      new fabric.Point(workspace.getCenterPoint().x, object.getCenterPoint().y)
    );
  }

  center(workspace, object) {
    var center = workspace.getCenterPoint();
    return this.canvas._centerObject(object, center);
  }

  centerV(workspace, object) {
    return this.canvas._centerObject(
      object,
      new fabric.Point(object.getCenterPoint().x, workspace.getCenterPoint().y)
    );
  }

  position(name) {
    const anignType = ['centerH', 'center', 'centerV'];
    const activeObject = this.canvas.getActiveObject();
    if (anignType.includes(name) && activeObject) {
      const defaultWorkspace = this.canvas.getObjects().find((item) => item.id === 'workspace');
      this[name](defaultWorkspace, activeObject);
      this.canvas.renderAll();
    }
  }
}

export default CenterAlign;
