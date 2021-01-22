<!-- =========================================================================================
	File Name: 
	Description:
	Component Name: 
	----------------------------------------------------------------------------------------
========================================================================================== -->

<template>
  <div class="board">
    <UiDrawingBoardTopTools
      @handle-tools="toolSet"
      @useHand="useHand"
      @changeSet="changeSet"
    />
    <UiDrawingBoardLeftTools
      @uploadFile="uploadFile"
      @handleTools="toolSet"
      @colorSet="colorChanged"
      @colorSetFill="colorChangedFill"
      @changeLineWidth="changeLineWidth"
      @changeStroke="changeStroke"
      @changeFill="changeFill"
      :fillEnabled="fillEnabled"
      :strokeEnabled="strokeEnabled"
    />
    <!-- <UiDrawingBoardPicBoard /> -->
    <div id="container" style="width: calc(100% - 70px); float: right"></div>
    {{ strokeEnabled }}\{{ fillEnabled }}/{{ id }}/{{ selectedShape }}
    <!-- <div v-if="selectedShape">{{ selectedShape.x() }}</div> -->
    <!-- <div v-if="selectedShape">{{ selectedShape.draggable() }}</div> -->
  </div>
</template>

<script>
import Konva from 'konva'
export default {
  components: {},
  data() {
    return {
      icon: 'create',
      //Sidebar
      active: true,

      notExpand: false,
      reduce: true,
      hiddenBack: true,
      selectedShape: {},
      //socket
      joinedRoom: '',
      handleToolsInfo: '',
      mouseDownInfo: '',
      mouseUpInfo: '',
      mouseMoveInfo: '',
      imageInfo: '',
      strokeInfo: '',
      fillInfo: '',
      mode: 'brush',

      isPaint: false,
      lastPointerPosition: null,
      initialPointerPosition: null,
      localPos: null,
      pos: null,

      draggable: true,
      fillEnabled: true,
      strokeEnabled: true,
      strokeScaleEnabled: false,
      lineCap: 'round',
      lineJoin: 'round',
      objStyle: {},
      id: 0,
      context: {
        strokeStyle: '#000000',
        fillStyle: '#000000',
        lineJoin: 'round',
        lineWidth: 5,
      },
      strokeStyle: '#000000',
      fillStyle: '',
      lineWidth: 5,
      layer: null,
      stage: null,
      image: null,
      canvas: null,
      rectDemo: null,
      lastinLine: null,
      tweens: [],
      tween: [],

      selectionRectangle: null,
      selectionCircle: null,
      selectionStart: null,
      selectionEllipse: null,
      selectionArc: null,

      selectionLine: null,
      selectionArrow: null,
      selectionText: null,
      selectionRing: null,
      selectionTriangle: null,
      selectionSquare: null,
      selectionCurve: null,
      selectionPentagon: null,
      selectionHexagon: null,
      selectionPolyline: null,
      stageDrag: false,
      tr: null,
      mouseClickInfo: null,
      previewImage: null,

      settings: {
        maxScrollbarLength: 60,
        wheelSpeed: 0.7,
      },
    }
  },
  computed: {
    user() {
      return this.$store.state.auth.active_user
    },
    item_unique() {
      return this.item_id ? this.item_id : this.$route.params.id
    },
    room() {
      return this.item_id ? this.item_id : this.$route.params.id
    },
  },
  watch: {
    selectedShape() {
      console.log('selected', this.selectedShape)
    },
    room() {
      let vm = this

      let user = {
        name: vm.user.disp_name,
        id: vm.userNumber,
      }
      vm.joinDetails = { room: vm.room, user: user }
      vm.joinRoom()
    },
    lineWidth() {
      let vm = this
      vm.context.lineWidth = vm.lineWidth
      vm.lineWidthItems = { room: vm.room, lineWidth: vm.lineWidth }
      vm.lineWidthSend(vm.lineWidthItems)
    },
  },
  mounted() {
    let vm = this
    if (process.client) {
      vm.socket = vm.$nuxtSocket({ channel: '/whiteboard' })
      if (vm.user.uid) {
        vm.userNumber = vm.user.uid
      } else {
        vm.userNumber = Math.floor(Math.random() * 1000000)
      }
      if (vm.room) {
        let user = {
          name: vm.user.disp_name,
          id: vm.userNumber,
        }
        vm.joinDetails = { room: vm.room, user: user }
        vm.joinRoom()
      }
      if (vm.user.disp_name == 'Guest') {
        vm.disp_active = true
      }

      var width = window.innerWidth
      var height = window.innerHeight - 25

      // first we need Konva core things: stage and layer
      vm.stage = new Konva.Stage({
        container: 'container',
        width: width,
        height: height,
      })

      vm.layer = new Konva.Layer()
      vm.stage.add(vm.layer)

      // then we are going to draw into special canvas element
      vm.canvas = document.createElement('canvas')
      vm.canvas.width = vm.stage.width()
      vm.canvas.height = vm.stage.height()

      console.log('canvas', vm.canvas)

      // creating Konva.Transformer to select and rotationDeg
      vm.tr = new Konva.Transformer()
      vm.layer.add(vm.tr)

      // by default select all shapes
      vm.tr.nodes([])

      // at this point basic demo is finished!!
      // we just have several transforming nodes
      vm.layer.draw()

      // add a new feature, lets add ability to draw selection rectangle
      vm.selectionRectangle = new Konva.Rect({
        fill: 'rgba(0,0,255,0.5)',
      })
      vm.layer.add(vm.selectionRectangle)

      vm.selectionCircle = new Konva.Circle({
        fill: 'rgba(0,0,255,0.5)',
      })
      vm.layer.add(vm.selectionCircle)

      vm.selectionStar = new Konva.Star({
        fill: 'rgba(0,0,255,0.5)',
      })
      vm.layer.add(vm.selectionStar)

      vm.selectionEllipse = new Konva.Ellipse({
        fill: 'rgba(0,0,255,0.5)',
      })
      vm.layer.add(vm.selectionEllipse)

      vm.selectionArc = new Konva.Arc({
        fill: 'rgba(0,0,255,0.5)',
      })
      vm.layer.add(vm.selectionArc)

      vm.selectionLine = new Konva.Line({
        fill: 'rgba(0,0,255,0.5)',
        stroke: 'rgba(0,0,255,0.5)',
      })
      vm.layer.add(vm.selectionLine)

      vm.selectionArrow = new Konva.Arrow({
        fill: 'rgba(0,0,255,0.5)',
        stroke: 'rgba(0,0,255,0.5)',
      })
      vm.layer.add(vm.selectionArrow)

      vm.selectionText = new Konva.Text({
        fill: 'rgba(0,0,255,0.5)',
        stroke: 'rgba(0,0,255,0.5)',
      })
      vm.layer.add(vm.selectionText)

      vm.selectionRing = new Konva.Ring({
        fill: 'rgba(0,0,255,0.5)',
      })
      vm.layer.add(vm.selectionRing)

      vm.selectionTriangle = new Konva.RegularPolygon({
        fill: 'rgba(0,0,255,0.5)',
      })
      vm.layer.add(vm.selectionTriangle)

      vm.selectionSquare = new Konva.RegularPolygon({
        fill: 'rgba(0,0,255,0.5)',
      })
      vm.layer.add(vm.selectionSquare)

      vm.selectionCurve = new Konva.Shape({
        fill: 'rgba(0,0,255,0.5)',
        stroke: 'rgba(0,0,255,0.5)',
      })
      vm.layer.add(vm.selectionCurve)

      vm.selectionPentagon = new Konva.RegularPolygon({
        fill: 'rgba(0,0,255,0.5)',
      })
      vm.layer.add(vm.selectionPentagon)

      vm.selectionHexagon = new Konva.RegularPolygon({
        fill: 'rgba(0,0,255,0.5)',
      })
      vm.layer.add(vm.selectionHexagon)

      vm.selectionPolyline = new Konva.Ellipse({
        fill: 'rgba(0,0,255,0.5)',
      })

      vm.layer.add(vm.selectionPolyline)

      // Good. Now we need to get access to context element
      vm.context = vm.canvas.getContext('2d')

      vm.stage.on('mousedown touchstart', function () {
        vm.isPaint = true
        vm.lastPointerPosition = vm.stage.getPointerPosition()
        vm.initialPointerPosition = vm.stage.getPointerPosition()

        vm.mouseDownItems = {
          room: vm.room,
          pointer: vm.stage.getPointerPosition(),
        }
        vm.mouseDownSend(vm.mouseDownItems)
        vm.drawStart()
      })

      // will it be better to listen move/end events on the window?

      vm.stage.on('mouseup touchend', function () {
        vm.isPaint = false
        vm.mouseUpItems = {
          room: vm.room,
          pointer: vm.stage.getPointerPosition(),
        }
        vm.mouseUpSend(vm.mouseUpItems)
        vm.drawEnd()
      })

      // and core function - drawing
      vm.stage.on('mousemove touchmove', function () {
        if (!vm.isPaint) {
          return
        }
        vm.pos = vm.stage.getPointerPosition()
        vm.mouseMoveItems = {
          room: vm.room,
          pointer: vm.pos,
        }
        vm.mouseMoveSend(vm.mouseMoveItems)
        vm.draw()
      })

      vm.stage.on('click tap', function (e) {
        console.log('target', e.target)
        vm.mouseClickItems = {
          room: vm.room,
          id: e.target.id,
          timeStamp: e.timeStamp,
          type: e.type,
          clientX: e.target.attrs.x,
          clientY: e.target.attrs.y,
          target: e.target.className,
          shiftKey: e.evt.shiftKey,
          ctrlKey: e.evt.ctrlKey,
          metaKey: e.evt.metaKey,
        }
        if (e.target !== 'Stage') {
          vm.mouseClickItems.id = e.target.attrs.id
          var shapes = vm.stage.findOne(`#${e.target.attrs.id}`)
          vm.selectedShape = shapes
        }
        vm.tap(e)
        vm.mouseClickSend(vm.mouseClickItems)
      })
    }
  },
  methods: {
    changeStroke(data) {
      this.strokeEnabled = data
      this.strokeEnable = { room: this.room, data: data }
      this.strokeChangeSend(this.strokeEnable)
    },
    changeFill(data) {
      this.fillEnabled = data
      this.fillEnable = { room: this.room, data: data }
      this.fillChangeSend(this.fillEnable)
    },
    strokeReceived({ data }) {
      this.strokeEnabled = data
    },
    fillReceived({ data }) {
      this.fillEnabled = data
    },

    useHand() {
      let vm = this
      vm.stageDrag = !vm.stageDrag
      if (vm.stageDrag) {
        vm.stage.draggable(true)

        //Mouse scroll Zoom
        var scaleBy = 1.01
        vm.stage.on('wheel', (e) => {
          e.evt.preventDefault()
          var oldScale = vm.stage.scaleX()

          var pointer = vm.stage.getPointerPosition()

          var mousePointTo = {
            x: (pointer.x - vm.stage.x()) / oldScale,
            y: (pointer.y - vm.stage.y()) / oldScale,
          }

          var newScale =
            e.evt.deltaY > 0 ? oldScale * scaleBy : oldScale / scaleBy

          vm.stage.scale({ x: newScale, y: newScale })

          var newPos = {
            x: pointer.x - mousePointTo.x * newScale,
            y: pointer.y - mousePointTo.y * newScale,
          }
          vm.stage.position(newPos)
          vm.stage.batchDraw()
        })
      } else {
        vm.stage.draggable(false)
        vm.stage.off('wheel')
      }
    },
    uploadFile(e) {
      let vm = this
      // Set Picture
      // const addImage = data => {
      //   const imgObj = new Image()
      //   imgObj.src = data
      //   imgObj.onload = () => {
      //     console.log('new image', imgObj)

      //     var yoda = new Konva.Image({
      //       x: 50,
      //       y: 50,
      //       image: imgObj,
      //       width: 106,
      //       height: 118
      //     })

      //     // add the shape to the layer
      //     vm.layer.add(yoda)
      //     vm.layer.batchDraw()
      //   }
      // }
      // set Background
      const addBackground = (data) => {
        console.log('new backround', data)
        // fabric.Image.fromURL(data, img => {
        //   this.canvasObj.setBackgroundImage(
        //     img,
        //     this.canvasObj.renderAll.bind(this.canvasObj),
        //     {
        //       scaleX: this.canvasObj.width / img.width,
        //       scaleY: this.canvasObj.height / img.height
        //     }
        //   )
        // })
      }

      const reader = new FileReader()
      reader.onload = (event) => {
        const data = event.target.result
        vm.imageItems = {
          room: vm.room,
          image: data,
        }
        vm.imageToolsSend(vm.imageItems)
        ;(this.type === 'background' ? addBackground : this.addImage)(data)
      }
      reader.readAsDataURL(e.target.files[0])
    },
    imageReceived({ image }) {
      this.addImage(image)
    },
    addImage(data) {
      let vm = this
      const imgObj = new Image()
      imgObj.src = data
      imgObj.onload = () => {
        // const image = new fabric.Image(imgObj)
        // this.canvasObj.centerObject(image)
        // this.canvasObj.add(image)
        // this.canvasObj.renderAll()
        var yoda = new Konva.Image({
          x: 50,
          y: 50,
          image: imgObj,
          width: 106,
          height: 118,
        })

        // add the shape to the layer
        vm.layer.add(yoda)
        vm.layer.batchDraw()
      }
    },
    handleTools(key) {
      console.log('what', key)
    },
    toolSet(type) {
      console.log('type', type)
      let vm = this
      vm.mode = type
      vm.handleToolsItems = {
        room: vm.room,
        key: type,
        index: 0,
      }
      vm.handleToolsSend(vm.handleToolsItems)

      switch (type) {
        case 'brush':
          vm.icon = 'create'
          break
        case 'eraser':
          vm.icon = 'eraser'
          break
        case 'circle':
          vm.icon = 'panorama_fish_eye'
          break
        case 'rectangle':
          vm.icon = 'crop_portrait'
          break
        case 'ellipse':
          vm.icon = 'menu'
          break
        case 'line':
          vm.icon = 'menu'

          break
        case 'arrow':
          vm.icon = 'arrow_right_alt'

          break
        case 'triangle':
          vm.icon = 'change_history'

          break
        case 'text':
          vm.icon = 'menu'
          break

        case 'square':
          vm.icon = 'crop_square'

          break
        case 'curve':
          vm.icon = 'menu'

          break
        case 'pentagon':
          vm.icon = 'menu'

          break
        case 'hexagon':
          vm.icon = 'menu'

          break
        case 'star':
          vm.icon = 'menu'

          break
        case 'ring':
          vm.icon = 'menu'

          break
        case 'polyline':
          vm.icon = 'menu'

          break
        default:
          break
      }
    },
    updateUsers(data) {
      console.log(data)
    },
    handleToolsReceived(data) {
      let vm = this

      vm.mode = data.key
      switch (data.key) {
        case 'brush':
          vm.icon = 'create'
          break
        case 'eraser':
          vm.icon = 'eraser'
          break
        case 'circle':
          vm.icon = 'panorama_fish_eye'
          break
        case 'rectangle':
          vm.icon = 'crop_portrait'
          break
        case 'ellipse':
          vm.icon = 'menu'
          break
        case 'line':
          vm.icon = 'menu'

          break
        case 'arrow':
          vm.icon = 'arrow_right_alt'

          break
        case 'triangle':
          vm.icon = 'change_history'

          break
        case 'text':
          vm.icon = 'menu'
          break

        case 'square':
          vm.icon = 'crop_square'

          break
        case 'curve':
          vm.icon = 'menu'

          break
        case 'pentagon':
          vm.icon = 'menu'

          break
        case 'hexagon':
          vm.icon = 'menu'

          break
        case 'star':
          vm.icon = 'menu'

          break
        case 'ring':
          vm.icon = 'menu'

          break
        case 'polyline':
          vm.icon = 'menu'

          break
        default:
          break
      }
    },
    mouseDownReceived(data) {
      let vm = this

      vm.isPaint = true
      vm.lastPointerPosition = data.pointer
      vm.initialPointerPosition = data.pointer
      vm.drawStart()
    },
    mouseUpReceived(data) {
      let vm = this

      vm.isPaint = false
      vm.drawEnd()
    },
    mouseMoveReceived(data) {
      let vm = this
      if (!vm.isPaint) {
        return
      }
      vm.pos = data.pointer
      vm.draw()
    },
    mouseClickReceived(data) {
      console.log('data', data)
      let target = {
        [data.target]: {
          id: data.id,
        },
      }
      let eData = {
        target: {
          id: data.id,
        },
        timeStamp: data.timeStamp,
        type: data.type,
        clientX: data.clientX,
        clientY: data.clientY,
        id: data.id,
        target,
        evt: {
          shiftKey: data.shiftKey,
          ctrlKey: data.ctrlKey,
          metaKey: data.metaKey,
        },
        // id: e.target.id,
        // timeStamp: e.timeStamp,
        // type: e.type,
        // clientX: e.clientX,
        // clientY: e.clientY,
        // target: e.target,
        // shiftKey: e.evt.shiftKey,
        // ctrlKey: e.evt.ctrlKey,
        // metaKey: e.evevt.metaKey
      }
      let vm = this
      console.log(eData)
      vm.tape(eData)
    },
    colorChanged(color) {
      let vm = this
      vm.strokeStyle = color
      vm.context.strokeStyle = vm.strokeStyle
      vm.colorItems = { room: vm.room, color: vm.strokeStyle }
      vm.colorSend(vm.colorItems)
    },
    colorChangedFill(color) {
      let vm = this
      vm.fillStyle = color
      vm.context.fillStyle = vm.fillStyle
      vm.colorFillItems = { room: vm.room, color: vm.fillStyle }
      vm.colorFillSend(vm.colorFillItems)
    },
    colorChange() {
      let vm = this
      vm.context.strokeStyle = vm.strokeStyle
      vm.colorItems = { room: vm.room, color: vm.strokeStyle }
      vm.colorSend(vm.colorItems)
    },
    // color2Change() {
    //   let vm = this
    //   vm.context.fillStyle = vm.fillStyle
    //   vm.colorItems = { room: vm.room, color: vm.fillStyle }
    //   vm.color2Send(vm.colorItems)
    // },
    colorReceived(data) {
      let vm = this
      vm.context.strokeStyle = data.color
    },
    colorFillReceived(data) {
      let vm = this
      vm.context.fillStyle = data.color
    },
    // color2Received(data) {
    //   let vm = this
    //   vm.context.fillStyle = data.color
    // },
    lineWidthReceived(data) {
      let vm = this
      vm.context.lineWidth = data.lineWidth
    },
    changeLineWidth(width) {
      this.lineWidth = width
    },
    tap(e) {
      let vm = this
      console.log('e3', e)
      // if we are selecting with rect, do nothing
      if (!vm.selectionRectangle.visible()) {
        return
      }

      // if click on empty area - remove all selections
      if (e.target === vm.stage) {
        vm.tr.nodes([])
        vm.layer.draw()
        return
      }

      // do nothing if clicked NOT on our rectangles
      // console.log('e name', e.target.hasName('rect'))
      // if (e.target.hasName('rect')) {
      //   return
      // }
      // do we pressed shift or ctrl?
      let metaPressed = e.evt.shiftKey || e.evt.ctrlKey || e.evt.metaKey
      let isSelected = vm.tr.nodes().indexOf(e.target) >= 0
      console.log('is', isSelected)
      console.log('meta', metaPressed)

      if (!metaPressed && !isSelected) {
        // if no key pressed and the node is not selected
        // select just one
        console.log('just one', e.target.attrs.id)
        vm.tr.nodes([e.target])
        // vm.trItems = { room: vm.room, tr: e.target.attrs.id }
        // vm.trSend(vm.trItems)
        vm.mode = ''
      } else if (metaPressed && isSelected) {
        // if we pressed keys and node was selected
        // we need to remove it from selection:
        const nodes = vm.tr.nodes().slice() // use slice to have new copy of array
        // remove node from array
        nodes.splice(nodes.indexOf(e.target), 1)
        vm.tr.nodes(nodes)
        console.log('many', nodes)

        vm.trItems = { room: vm.room, tr: nodes }
        vm.trSend(vm.trItems)
        vm.mode = ''
      } else if (metaPressed && !isSelected) {
        // add the node into selection
        const nodes = vm.tr.nodes().concat([e.target])

        vm.tr.nodes(nodes)
        vm.mode = ''
      }
      vm.layer.draw()
    },
    tape(e) {
      let vm = this

      var shapes = vm.stage.findOne(`#${e.id}`)
      vm.selectedShape = shapes
      shapes.setAttrs({
        fill: 'red',
      })
      vm.layer.batchDraw()
      // shapes.each(function(shape) {
      //   vm.tweens.push(
      //     new Konva.Tween({
      //       node: shape,
      //       duration: 1,
      //       scaleX: Math.random() * 2,
      //       scaleY: Math.random() * 2,
      //       easing: Konva.Easings.ElasticEaseOut
      //     }).play()
      //   )
      // })
      // // if we are selecting with rect, do nothing
      // if (!vm.selectionRectangle.visible()) {
      //   return
      // }

      // // if click on empty area - remove all selections
      // if (e.target === vm.stage) {
      //   vm.tr.nodes([])
      //   vm.layer.draw()
      //   return
      // }

      // // do nothing if clicked NOT on our rectangles
      // // console.log('e name', e.target.hasName('rect'))
      // // if (e.target.hasName('rect')) {
      // //   return
      // // }
      // // do we pressed shift or ctrl?
      // let metaPressed = e.evt.shiftKey || e.evt.ctrlKey || e.evt.metaKey
      // let isSelected = vm.tr.nodes().indexOf(e.target) >= 0
      // console.log('is', isSelected)
      // console.log('meta', metaPressed)

      // if (!metaPressed && !isSelected) {
      //   // if no key pressed and the node is not selected
      //   // select just one
      //   console.log('just one', e.target.attrs.id)
      //   vm.tr.nodes([e.target])
      //   // vm.trItems = { room: vm.room, tr: e.target.attrs.id }
      //   // vm.trSend(vm.trItems)
      //   vm.mode = ''
      // } else if (metaPressed && isSelected) {
      //   // if we pressed keys and node was selected
      //   // we need to remove it from selection:
      //   const nodes = vm.tr.nodes().slice() // use slice to have new copy of array
      //   // remove node from array
      //   nodes.splice(nodes.indexOf(e.target), 1)
      //   vm.tr.nodes(nodes)
      //   console.log('many', nodes)

      //   vm.trItems = { room: vm.room, tr: nodes }
      //   vm.trSend(vm.trItems)
      //   vm.mode = ''
      // } else if (metaPressed && !isSelected) {
      //   // add the node into selection
      //   const nodes = vm.tr.nodes().concat([e.target])

      //   vm.tr.nodes(nodes)
      //   vm.mode = ''
      // }
      // vm.layer.draw()
    },
    trReceived(data) {
      let vm = this
      console.log('data', data)
      console.log('stage', vm.stage)
      var all = vm.stage.find()
      console.log('all', all)
      // vm.tr = data
      var shape = vm.stage.findOne(`#${data}`)
      // var shape = vm.stage.find(`#${data}`)[0]
      console.log('shape')

      if (vm.tween) {
        vm.tween.destroy()
      }

      vm.tween = new Konva.Tween({
        node: shape,
        duration: 1,
        scaleX: Math.random() * 2,
        scaleY: Math.random() * 2,
        easing: Konva.Easings.ElasticEaseOut,
      }).play()
    },
    draw() {
      let vm = this
      //Getting radius
      let radius
      let mx
      let my
      console.log('vm.pos', vm.pos)
      if (vm.pos.x >= vm.initialPointerPosition.x) {
        mx = vm.pos.x - vm.initialPointerPosition.x
      } else {
        mx = vm.initialPointerPosition.x - vm.pos.x
      }

      if (vm.pos.y >= vm.initialPointerPosition.y) {
        my = vm.pos.y - vm.initialPointerPosition.y
      } else {
        my = vm.initialPointerPosition.y - vm.pos.y
      }

      switch (vm.mode) {
        case 'circle':
          vm.selectionCircle.setAttrs({
            radius: (mx + my) / 2,
            x: vm.initialPointerPosition.x,
            y: vm.initialPointerPosition.y,
          })
          vm.layer.batchDraw()
          break
        case 'rectangle':
          if (!vm.selectionRectangle.visible()) {
            return
          }
          let x1 = vm.initialPointerPosition.x
          let y1 = vm.initialPointerPosition.y
          let x2 = vm.pos.x
          let y2 = vm.pos.y

          vm.selectionRectangle.setAttrs({
            x: Math.min(x1, x2),
            y: Math.min(y1, y2),
            width: Math.abs(x2 - x1),
            height: Math.abs(y2 - y1),
          })
          vm.layer.batchDraw()
          break
        case 'ellipse':
          vm.selectionEllipse.setAttrs({
            x: vm.initialPointerPosition.x,
            y: vm.initialPointerPosition.y,
            radius: {
              x: mx,
              y: my,
            },
          })
          vm.layer.batchDraw()
          break
        case 'line':
          vm.selectionLine.setAttrs({
            points: [
              vm.initialPointerPosition.x,
              vm.initialPointerPosition.y,
              vm.pos.x,
              vm.pos.y,
            ],
            strokeWidth: 4,
            lineCap: 'round',
            lineJoin: 'round',
          })
          vm.layer.batchDraw()
          break
        case 'arrow':
          vm.selectionArrow.setAttrs({
            points: [
              vm.initialPointerPosition.x,
              vm.initialPointerPosition.y,
              vm.pos.x,
              vm.pos.y,
            ],
            strokeWidth: 4,
            lineCap: 'round',
            lineJoin: 'round',
          })
          vm.layer.batchDraw()

          break
        case 'triangle':
          vm.selectionTriangle.setAttrs({
            x: vm.initialPointerPosition.x,
            y: vm.initialPointerPosition.y,
            sides: 3,
            radius: (mx + my) / 2,
          })
          vm.layer.batchDraw()

          break
        case 'text':
          vm.selectionText.setAttrs({
            x: vm.pos.x,
            y: vm.pos.y,
            width: 400,
            height: 50,
            text: 'Placement',
          })
          vm.layer.batchDraw()

        case 'square':
          vm.selectionSquare.setAttrs({
            x: vm.pos.x,
            y: vm.pos.y,
            sides: 4,
            radius: (mx + my) / 2,
            rotationDeg: -45,
          })
          vm.layer.batchDraw()

          break
        case 'curve':
          vm.selectionCurve.setAttrs({
            strokeWidth: 4,
            lineCap: 'round',
            strokeEnabled: true,
            strokeScaleEnabled: false,
            sceneFunc: function (context) {
              context.beginPath()
              context.moveTo(vm.pos.x, vm.pos.y)
              context.bezierCurveTo(
                vm.pos.x,
                vm.pos.y + 200,
                vm.pos.x + 200,
                vm.pos.y + 200,
                vm.pos.x + 200,
                vm.pos.y
              )
              context.strokeShape(this)
            },
          })

          break
        case 'pentagon':
          vm.selectionPentagon.setAttrs({
            x: vm.pos.x,
            y: vm.pos.y,
            sides: 4,
            radius: (mx + my) / 2,
          })
          vm.layer.batchDraw()
          break
        case 'hexagon':
          vm.selectionHexagon.setAttrs({
            x: vm.pos.x,
            y: vm.pos.y,
            sides: 6,
            radius: (mx + my) / 2,
          })
          vm.layer.batchDraw()
          break
        case 'star':
          vm.selectionStar.setAttrs({
            innerRadius: (mx + my) / 2,
            outerRadius: mx + my,
            x: vm.initialPointerPosition.x,
            y: vm.initialPointerPosition.y,

            numPoints: 5,
          })
          vm.layer.batchDraw()
          break
        case 'ring':
          vm.selectionRing.setAttrs({
            innerRadius: (mx + my) / 2,
            outerRadius: mx + my,
            x: vm.initialPointerPosition.x,
            y: vm.initialPointerPosition.y,
          })
          vm.layer.batchDraw()
          break
        case 'polyline':
          var polyLine
          var onShape = false
          var linePoints = [{ x: pointerPosition.x, y: pointerPosition.y }]
          var mousePos
          var group = new Konva.Group({
            draggable: true,
          })
          stageDraw.on('mousedown', function () {
            linePoints.push({
              x: stageDraw.getPointerPosition().x,
              y: stageDraw.getPointerPosition().y,
            })
          })
          stageDraw.on('dblclick', function () {
            if (linePoints.length >= 2 && !onShape) {
              for (var i = 0; i < linePoints.length - 1; i++) {
                var x1 = linePoints[i].x
                var y1 = linePoints[i].y
                var x2 = linePoints[i + 1].x
                var y2 = linePoints[i + 1].y
                polyLine = new Konva.Line({
                  id: 'polyline',
                  points: [x1, y1, x2, y2],
                  stroke: $c.name2hex('black'),
                  strokeWidth: 4,
                  strokeEnabled: true,
                  lineCap: 'round',
                  lineJoin: 'round',
                  strokeScaleEnabled: false,
                  draggable: false,
                  resizeEnabled: false,
                  rotateEnabled: false,
                })
                group.add(polyLine)
              }
              group.on('mouseover', function () {
                onShape = true
                document.body.style.cursor = 'pointer'
                polyLine.transformsEnabled('none')
              })
              group.on('mouseout', function () {
                document.body.style.cursor = 'default'
              })
              layerDraw.add(group)
              stageDraw.add(layerDraw)
            }
          })
          //}
          newShape = group
          break
        default:
          break
      }

      if (vm.mode === 'brush') {
        //  isPaint = true;

        var newPoints = vm.lastLine.points().concat([vm.pos.x, vm.pos.y])
        vm.lastLine.points(newPoints)
        vm.layer.batchDraw()
      }
      if (vm.mode === 'eraser') {
        var newPoints = vm.lastLine.points().concat([vm.pos.x, vm.pos.y])
        vm.lastLine.points(newPoints)
        vm.layer.batchDraw()
      }

      if (vm.mode == 'select') {
        // no nothing if we didn't start selection
        if (!vm.selectionRectangle.visible()) {
          return
        }
        let x1 = vm.initialPointerPosition.x
        let y1 = vm.initialPointerPosition.y
        let x2 = vm.pos.x
        let y2 = vm.pos.y

        vm.selectionRectangle.setAttrs({
          x: Math.min(x1, x2),
          y: Math.min(y1, y2),
          width: Math.abs(x2 - x1),
          height: Math.abs(y2 - y1),
        })
        vm.layer.batchDraw()
      }
    },
    drawEnd() {
      let vm = this
      //Getting radius
      let radius
      let mx
      let my
      if (vm.pos.x >= vm.initialPointerPosition.x) {
        mx = vm.pos.x - vm.initialPointerPosition.x
      } else {
        mx = vm.initialPointerPosition.x - vm.pos.x
      }

      if (vm.pos.y >= vm.initialPointerPosition.y) {
        my = vm.pos.y - vm.initialPointerPosition.y
      } else {
        my = vm.initialPointerPosition.y - vm.pos.y
      }

      if (vm.mode) {
        console.log('mode', vm.id)
        vm.id++
      }

      vm.objStyle = {
        id: vm.id.toString(),
        draggable: true,
        strokeEnabled: true,
        fillEnabled: true,
        strokeScaleEnabled: vm.strokeScaleEnabled,
      }
      console.log('style', vm.objStyle)

      let objOwn = {}

      let obj = {}

      if (vm.fillEnabled) {
        vm.objStyle.fill = vm.context.fillStyle
      }
      if (vm.strokeEnabled) {
        vm.objStyle.stroke = vm.context.strokeStyle
        vm.objStyle.strokeWidth = vm.context.lineWidth
      }

      switch (vm.mode) {
        case 'circle':
          // update visibility in timeout, so we can check it in click event
          setTimeout(() => {
            vm.selectionCircle.setAttrs({
              radius: 0,
              x: 0,
              y: 0,
            })
            vm.layer.batchDraw()
          })
          objOwn = {
            radius: (mx + my) / 2,
            x: vm.initialPointerPosition.x,
            y: vm.initialPointerPosition.y,
          }

          obj = { ...vm.objStyle, ...objOwn }

          var circle = new Konva.Circle(obj)
          vm.layer.add(circle)
          vm.stage.draw()
          vm.mode = ''

          break
        case 'rectangle':
          // update visibility in timeout, so we can check it in click event
          setTimeout(() => {
            vm.selectionRectangle.setAttrs({
              width: 0,
              height: 0,
              x: 0,
              y: 0,
            })
            vm.layer.batchDraw()
          })

          objOwn = {
            x: vm.initialPointerPosition.x,
            y: vm.initialPointerPosition.y,

            width: vm.pos.x - vm.initialPointerPosition.x,
            height: vm.pos.y - vm.initialPointerPosition.y,
          }

          obj = { ...vm.objStyle, ...objOwn }

          var rectangle = new Konva.Rect(obj)
          vm.layer.add(rectangle)
          vm.stage.draw()
          vm.mode = ''

          break
        case 'ellipse':
          setTimeout(() => {
            vm.selectionEllipse.setAttrs({
              radius: {
                x: 0,
                y: 0,
              },
              x: 0,
              y: 0,
            })
            vm.layer.batchDraw()
            vm.mode = ''
          })

          objOwn = {
            x: vm.initialPointerPosition.x,
            y: vm.initialPointerPosition.y,
            radius: {
              x: mx,
              y: my,
            },
          }

          obj = { ...vm.objStyle, ...objOwn }

          var ellipse = new Konva.Ellipse(obj)

          vm.layer.add(ellipse)
          vm.stage.draw()
          vm.mode = ''

          break
        case 'line':
          setTimeout(() => {
            vm.selectionLine.setAttrs({
              points: [0, 0, 0, 0],
            })
            vm.layer.batchDraw()
            vm.mode = ''
          })

          objOwn = {
            points: [
              vm.pos.x,
              vm.pos.y,
              vm.initialPointerPosition.x,
              vm.initialPointerPosition.y,
            ],
            lineCap: vm.lineCap,
            lineJoin: vm.lineJoin,
          }

          obj = { ...vm.objStyle, ...objOwn }

          var line = new Konva.Line(obj)
          vm.layer.add(line)
          vm.stage.draw()
          vm.mode = ''

          break
        case 'arrow':
          setTimeout(() => {
            vm.selectionArrow.setAttrs({
              points: [0, 0, 0, 0],
            })
            vm.layer.batchDraw()
            vm.mode = ''
          })

          objOwn = {
            points: [
              vm.initialPointerPosition.x,
              vm.initialPointerPosition.y,
              vm.pos.x,
              vm.pos.y,
            ],
            pointerLength: 20,
            pointerWidth: 20,
            lineCap: vm.lineCap,
            lineJoin: vm.lineJoin,
          }

          obj = { ...vm.objStyle, ...objOwn }

          var arrow = new Konva.Arrow(obj)
          vm.layer.add(arrow)
          vm.stage.draw()
          vm.mode = ''

          break
        case 'triangle':
          setTimeout(() => {
            vm.selectionTriangle.setAttrs({
              x: 0,
              y: 0,
              sides: 3,
              radius: 0,
            })
            vm.layer.batchDraw()
            vm.mode = ''
          })

          objOwn = {
            x: vm.initialPointerPosition.x,
            y: vm.initialPointerPosition.y,
            sides: 3,
            radius: (mx + my) / 2,
          }

          obj = { ...vm.objStyle, ...objOwn }

          console.log('triangle obj', obj)

          var triangle = new Konva.RegularPolygon(obj)

          vm.layer.add(triangle)
          vm.stage.draw()
          vm.mode = ''

          break
        case 'text':
          setTimeout(() => {
            vm.selectionText.setAttrs({
              x: 0,
              y: 0,
              width: 0,
              height: 0,
            })
            vm.layer.batchDraw()
            vm.mode = ''
          })

          objOwn = {
            text: 'text',
            fontSize: 20,
            x: vm.pos.x,
            y: vm.pos.y,
            width: 400,
            height: 50,

            ellipsis: false,
          }

          obj = { ...vm.objStyle, ...objOwn }

          var text = new Konva.Text(obj)

          vm.layer.add(text)
          vm.stage.draw()
          vm.mode = ''

          break
        case 'arc':
          setTimeout(() => {
            vm.selectionArc.setAttrs({
              radius: 0,
              x: 0,
              y: 0,
            })
            vm.layer.batchDraw()
          })

          objOwn = {
            innerRadius: (mx + my) / 2,
            outerRadius: mx + my,
            x: vm.initialPointerPosition.x,
            y: vm.initialPointerPosition.y,

            angle: 60,
            rotationDeg: -120,
          }

          obj = { ...vm.objStyle, ...objOwn }

          var arc = new Konva.Arc(obj)

          vm.layer.add(arc)
          vm.stage.draw()
          vm.mode = ''

          break
        case 'square':
          setTimeout(() => {
            vm.selectionSquare.setAttrs({
              radius: 0,
              x: 0,
              y: 0,
            })
            vm.layer.batchDraw()
          })

          objOwn = {
            x: vm.pos.x,
            y: vm.pos.y,
            sides: 4,
            radius: (mx + my) / 2,
            rotationDeg: -45,
          }

          obj = { ...vm.objStyle, ...objOwn }
          console.log('square obj', obj)
          var square = new Konva.RegularPolygon(obj)
          vm.layer.add(square)
          vm.stage.draw()
          vm.mode = ''

          break
        case 'curve':
          setTimeout(() => {
            vm.selectionCurve.setAttrs({
              radius: 0,
              x: 0,
              y: 0,
            })
            vm.layer.batchDraw()
          })

          objOwn = {
            lineCap: vm.lineCap,

            sceneFunc: function (context) {
              context.beginPath()
              context.moveTo(vm.pos.x, vm.pos.y)
              context.bezierCurveTo(
                vm.pos.x,
                vm.pos.y + 200,
                vm.pos.x + 200,
                vm.pos.y + 200,
                vm.pos.x + 200,
                vm.pos.y
              )
              context.strokeShape(this)
            },
          }

          obj = { ...vm.objStyle, ...objOwn }

          var curve = new Konva.Shape(obj)
          vm.layer.add(curve)
          vm.stage.draw()
          vm.mode = ''

          break
        case 'pentagon':
          setTimeout(() => {
            vm.selectionPentagon.setAttrs({
              radius: 0,
              x: 0,
              y: 0,
            })
            vm.layer.batchDraw()
          })

          objOwn = {
            x: vm.pos.x,
            y: vm.pos.y,
            sides: 5,
            radius: (mx + my) / 2,
          }

          obj = { ...vm.objStyle, ...objOwn }
          console.log('pent obj', obj)

          var pentagon = new Konva.RegularPolygon(obj)
          vm.layer.add(pentagon)
          vm.stage.draw()
          vm.mode = ''

          break
        case 'hexagon':
          setTimeout(() => {
            vm.selectionHexagon.setAttrs({
              radius: 0,
              x: 0,
              y: 0,
            })
            vm.layer.batchDraw()
          })

          objOwn = {
            x: vm.pos.x,
            y: vm.pos.y,
            sides: 6,
            radius: (mx + my) / 2,
          }

          obj = { ...vm.objStyle, ...objOwn }
          console.log('hex obj', obj)

          var hexagon = new Konva.RegularPolygon(obj)
          vm.layer.add(hexagon)
          vm.stage.draw()
          vm.mode = ''

          break
        case 'star':
          setTimeout(() => {
            vm.selectionStar.setAttrs({
              innerRadius: 0,
              outerRadius: 0,
              x: 0,
              y: 0,
            })
            vm.layer.batchDraw()
          })

          objOwn = {
            innerRadius: (mx + my) / 2,
            outerRadius: mx + my,
            x: vm.initialPointerPosition.x,
            y: vm.initialPointerPosition.y,
            numPoints: 5,
            lineCap: 'round',
            lineJoin: 'round',
          }

          obj = { ...vm.objStyle, ...objOwn }

          var star = new Konva.Star(obj)
          vm.layer.add(star)
          vm.stage.draw()
          vm.mode = ''

          break
        case 'ring':
          setTimeout(() => {
            vm.selectionRing.setAttrs({
              innerRadius: 0,
              outerRadius: 0,
              x: 0,
              y: 0,
            })
            vm.layer.batchDraw()
          })

          objOwn = {
            innerRadius: (mx + my) / 2,
            outerRadius: mx + my,
            x: vm.initialPointerPosition.x,
            y: vm.initialPointerPosition.y,
          }

          obj = { ...vm.objStyle, ...objOwn }

          var ring = new Konva.Ring(obj)
          vm.layer.add(ring)
          vm.stage.draw()
          vm.mode = ''

          break
        case 'polyline':
          var polyLine
          var onShape = false
          var linePoints = [{ x: pointerPosition.x, y: pointerPosition.y }]
          var mousePos
          var group = new Konva.Group({
            draggable: true,
          })
          stageDraw.on('mousedown', function () {
            linePoints.push({
              x: stageDraw.getPointerPosition().x,
              y: stageDraw.getPointerPosition().y,
            })
          })
          stageDraw.on('dblclick', function () {
            if (linePoints.length >= 2 && !onShape) {
              for (var i = 0; i < linePoints.length - 1; i++) {
                var x1 = linePoints[i].x
                var y1 = linePoints[i].y
                var x2 = linePoints[i + 1].x
                var y2 = linePoints[i + 1].y
                polyLine = new Konva.Line({
                  id: 'polyline',
                  points: [x1, y1, x2, y2],
                  stroke: $c.name2hex('black'),
                  strokeWidth: 4,
                  strokeEnabled: true,
                  lineCap: 'round',
                  lineJoin: 'round',
                  strokeScaleEnabled: false,
                  draggable: false,
                  resizeEnabled: false,
                  rotateEnabled: false,
                })
                group.add(polyLine)
              }
              group.on('mouseover', function () {
                onShape = true
                document.body.style.cursor = 'pointer'
                polyLine.transformsEnabled('none')
              })
              group.on('mouseout', function () {
                document.body.style.cursor = 'default'
              })
              layerDraw.add(group)
              stageDraw.add(layerDraw)
            }
          })

          newShape = group
          break
        default:
          break
      }
    },
    drawStart() {
      let vm = this
      if (vm.mode == 'select') {
        vm.selectionRectangle.visible(true)
        vm.selectionRectangle.width(0)
        vm.selectionRectangle.height(0)
        vm.layer.draw()
      }
      if (vm.mode === 'brush') {
        //  isPaint = true;
        var pos = vm.stage.getPointerPosition()
        vm.lastLine = new Konva.Line({
          stroke: vm.context.strokeStyle,
          strokeWidth: vm.context.lineWidth,
          globalCompositeOperation: 'source-over',
          points: [vm.initialPointerPosition.x, vm.initialPointerPosition.y],
        })
        vm.layer.add(vm.lastLine)
      }
      if (vm.mode === 'eraser') {
        var pos = vm.stage.getPointerPosition()
        vm.lastLine = new Konva.Line({
          strokeWidth: vm.context.lineWidth,
          globalCompositeOperation:
            vm.mode === 'brush' ? 'source-over' : 'destination-out',
          points: [vm.initialPointerPosition.x, vm.initialPointerPositionpos.y],
        })
        vm.layer.add(vm.lastLine)
      }
    },
    changeSet() {
      let vm = this
      // select shapes by name
      var shapes = this.stage.find('.rectangle')

      // if there are currently any active tweens, destroy them
      // before creating new ones
      for (var n = 0; n < vm.tweens.length; n++) {
        vm.tweens[n].destroy()
      }

      // apply transition to all nodes in the array
      shapes.each(function (shape) {
        vm.tweens.push(
          new Konva.Tween({
            node: shape,
            duration: 1,
            scaleX: Math.random() * 2,
            scaleY: Math.random() * 2,
            easing: Konva.Easings.ElasticEaseOut,
          }).play()
        )
      })
    },
    psSectionScroll() {
      this.showShadowBottom = this.$refs.verticalNavMenuPs.$el.scrollTop > 0
    },
  },
}
</script>

<style lang="less" scoped>
.board {
  width: 100%;
  height: 100%;

  .slide-fade-enter-active {
    transition: all 0.5s ease;
  }

  .slide-fade-leave-active {
    transition: all 0.5s;
  }

  .slide-fade-enter,
  .slide-fade-leave-to {
    opacity: 0;
    transform: translateX(-10px);
  }
}
.toolbar {
  position: fixed;
  right: 0;
  left: 0;
  bottom: 0;
  padding: 10px;
  background: rgba(236, 236, 236, 0.5);
  display: flex;
  align-items: center;
  justify-content: space-between;
}
/* Smartphones (portrait) ----------- */
@media only screen and (max-width: 450px) {
  .toolbar {
    flex-direction: column;
  }
}
.toolbar > * {
  display: flex;
  align-items: center;
}
.room {
  font-family: sans-serif;
  font-size: 24px;
}
.room > span {
  font-weight: bold;
  letter-spacing: 0.3em;
}
button,
a.button {
  background: white;
  padding: 0.4em 0.7em;
  font-size: 14px;
  color: gray;
  text-decoration: none;
  font-family: sans-serif;
  border: solid gray 2px;
  border-radius: 10px;
  text-align: center;
  margin: 0 10px;
}
button:hover,
a:hover {
  border: solid orange 2px;
  color: orange;
}
a#vr-button {
  display: inline-block;
  background: white;
  padding: 0.4em 0.7em;
  font-size: 18px;
  color: gray;
  font-weight: bold;
  text-decoration: none;
  font-family: sans-serif;
  border: solid gray 4px;
  border-radius: 10px;
  text-align: center;
}
a#vr-button:hover {
  border: solid orange 4px;
  color: orange;
}
body {
  padding: 0;
  margin: 0;
}
</style>
