import * as THREE from 'three'
import gsap from 'gsap'
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';

export default class Application {
  private _renderer: THREE.WebGLRenderer
  private _scene: THREE.Scene
  private _camera: THREE.PerspectiveCamera
  private _controls: OrbitControls
  private _idFrame: number = 0

  constructor(canvas: HTMLCanvasElement) {
    this._scene = new THREE.Scene()

    this._camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 0.1, 1000)
    this._camera.position.set(0, 0, 10)

    this._renderer = new THREE.WebGLRenderer({
      canvas: canvas,
      alpha: true,
    })
    this._renderer.setPixelRatio(gsap.utils.clamp(1.5, 1, window.devicePixelRatio))
    this._renderer.setSize(window.innerWidth, window.innerHeight)
    this._renderer.outputColorSpace = THREE.LinearSRGBColorSpace
    //this._renderer.setClearColor(0xF2F2F2, 0)

    this._controls = new OrbitControls( this._camera, this._renderer.domElement );

    const axesHelper = new THREE.AxesHelper( 100 );
    this._scene.add( axesHelper );

    const planeGeometry = new THREE.PlaneGeometry(1, 1)
    const planeMaterial = new THREE.MeshBasicMaterial({ color: 0xffff00, side: THREE.DoubleSide })
    const planeMesh = new THREE.Mesh(planeGeometry, planeMaterial)
    planeMesh.position.set(0,0,0)
    this.add(planeMesh)

    this.resize()
    this.update()
    window.addEventListener("resize", this.resize)
  }

  resize(): void {
    this._camera.aspect = window.innerWidth / window.innerHeight
    this._camera.updateProjectionMatrix()
    this._renderer.setSize(window.innerWidth, window.innerHeight)
  }

  update() {
    this._controls.update()
    this._renderer.render(this._scene, this._camera)
  }

  add(object: THREE.Object3D) {
    this._scene.add(object)
  }

  destroy() {
    cancelAnimationFrame(this._idFrame)
    window.removeEventListener("resize", this.resize)
  }

  get camera() {
    return this._camera
  }
}
