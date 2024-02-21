import {
  PerspectiveCamera,
  Scene,
  WebGLRenderer
} from 'three'
import gsap from 'gsap'

export default class Application {
  private _renderer: WebGLRenderer
  private _scene: Scene
  private _camera: PerspectiveCamera
  private _idFrame: number = 0

  constructor(canvas: HTMLCanvasElement) {
    this._scene = new Scene()

    this._camera = new PerspectiveCamera(45, window.innerWidth / window.innerHeight, 0.1, 100)
    this._camera.position.z = 50;

    this._renderer = new WebGLRenderer({
      canvas,
      alpha: true,
    })
    this._renderer.setPixelRatio(gsap.utils.clamp(1.5, 1, window.devicePixelRatio))
    this._renderer.setSize(window.innerWidth, window.innerHeight)
    this._renderer.setClearColor(0xF2F2F2, 0)

    this.resize()
    window.addEventListener("resize", this.resize)
  }

  resize(): void {
    this._camera.aspect = window.innerWidth / window.innerHeight
    this._camera.updateProjectionMatrix()
    this._renderer.setSize(window.innerWidth, window.innerHeight)
  }

  update() {
    this._renderer.render(this._scene, this._camera)
  }

  add(object: THREE.Object3D) {
    this._scene.add(object)
  }

  destroy() {
    cancelAnimationFrame(this._idFrame);
    window.removeEventListener("resize", this.resize)
  }
}
