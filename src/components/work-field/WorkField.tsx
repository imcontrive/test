import React, { FunctionComponent, useState, useEffect, useRef } from "react";
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import { useSelector, useDispatch } from "react-redux";
import { ApplicationState } from "../../store";
import { setScene } from "../../store/main/actions";

type OwnProps = {};

type Props = OwnProps;

const WorkField: FunctionComponent<Props> = props => {
  const model = useSelector((state: ApplicationState) => state.main.model);
  const threeD_scene = useSelector(
    (state: ApplicationState) => state.main.scene
  );

  const dispatch = useDispatch();

  useEffect(() => {
    model && dispatch(setScene(new THREE.Scene().add(model.scene)));
  }, [model]);

  const canvasRef = useRef<HTMLCanvasElement>(null);

  const [threeD_camera, setThreeD_camera] = useState<THREE.PerspectiveCamera>();
  const [threeD_renderer, setThreeD_renderer] = useState<THREE.WebGLRenderer>();
  const [threeD_controls, setThreeD_controls] = useState<OrbitControls>();

  useEffect(() => {
    canvasRef.current && Init3DPage(canvasRef.current);
  }, [canvasRef]);

  function Init3DPage(threeD_container: HTMLCanvasElement) {
    dispatch(setScene(new THREE.Scene()));
    setThreeD_renderer(
      new THREE.WebGLRenderer({
        canvas: threeD_container,
        antialias: true,
        preserveDrawingBuffer: true
      })
    );
    setThreeD_camera(
      new THREE.PerspectiveCamera(
        70,
        window.innerWidth / window.innerHeight,
        0.1,
        10000
      )
    );
  }

  useEffect(() => {
    // 3D Lights
    threeD_scene?.add(new THREE.AmbientLight(0xffffff));
    if (threeD_scene && !model) {
      // Add base geometry for scene
      let sceneBasePlaneMesh = new THREE.Mesh(
        new THREE.PlaneGeometry(50, 50, 32),
        new THREE.MeshPhongMaterial({
          color: 0xbebebe,
          side: THREE.DoubleSide
        })
      );
      threeD_scene.add(sceneBasePlaneMesh);
      sceneBasePlaneMesh.rotation.x = -1.57;
      sceneBasePlaneMesh.position.y = -0.02;
      let gridHelper = new THREE.GridHelper(50, 50);
      threeD_scene.add(gridHelper);

      add3dmodel(threeD_scene);
    }
  }, [threeD_scene]);

  useEffect(() => {
    if (threeD_renderer) {
      threeD_renderer.setSize(window.innerWidth, window.innerHeight);
      threeD_renderer.shadowMap.enabled = true;
      threeD_renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    }
  }, [threeD_renderer]);

  useEffect(() => {
    threeD_camera && threeD_camera.position.set(-26, 32, -0.5);
  }, [threeD_camera]);

  useEffect(() => {
    if (threeD_camera && threeD_renderer) {
      setThreeD_controls(
        new OrbitControls(threeD_camera, threeD_renderer.domElement)
      );
    }
  }, [threeD_camera, threeD_renderer]);

  function add3dmodel(threeD_scene: THREE.Scene) {
    let centrerCylinderMesh = new THREE.Mesh(
      new THREE.CylinderBufferGeometry(1, 1, 13, 32),
      new THREE.MeshStandardMaterial({
        color: 0xc0c0c0,
        emissive: 0x000000
      })
    );
    threeD_scene.add(centrerCylinderMesh);
    centrerCylinderMesh.position.set(5, 6, 5);

    // Add 4 frmaes for tower geometry
    let towerLineLength = 12.16;
    addLineCylinder(
      threeD_scene,
      towerLineLength,
      0.5,
      towerLineLength / 2,
      0.5,
      Math.PI / 36,
      0,
      -Math.PI / 36
    );
    addLineCylinder(
      threeD_scene,
      towerLineLength,
      9.5,
      towerLineLength / 2,
      0.5,
      Math.PI / 36,
      0,
      Math.PI / 36
    );
    addLineCylinder(
      threeD_scene,
      towerLineLength,
      9.5,
      towerLineLength / 2,
      9.5,
      -Math.PI / 36,
      0,
      Math.PI / 36
    );
    addLineCylinder(
      threeD_scene,
      towerLineLength,
      0.5,
      towerLineLength / 2,
      9.5,
      -Math.PI / 36,
      0,
      -Math.PI / 36
    );

    let frame1LineLength = 11.66;
    addLineCylinder(
      threeD_scene,
      frame1LineLength,
      0.3,
      frame1LineLength / 2 + 3 - 5.4,
      4.7,
      Math.PI / 3.3,
      0,
      -Math.PI / 60
    );
    addLineCylinder(
      threeD_scene,
      frame1LineLength,
      0.3,
      frame1LineLength / 2 + 3 - 5.3,
      5.3,
      -Math.PI / 3.3,
      0,
      -Math.PI / 60
    );

    addLineCylinder(
      threeD_scene,
      frame1LineLength,
      9.7,
      frame1LineLength / 2 + 3 - 5.4,
      4.7,
      Math.PI / 3.3,
      0,
      Math.PI / 60
    );
    addLineCylinder(
      threeD_scene,
      frame1LineLength,
      9.7,
      frame1LineLength / 2 + 3 - 5.3,
      5.3,
      -Math.PI / 3.3,
      0,
      Math.PI / 60
    );

    addLineCylinder(
      threeD_scene,
      frame1LineLength,
      5.3,
      frame1LineLength / 2 + 3 - 5.4,
      0.3,
      Math.PI / 60,
      0,
      Math.PI / 3.3
    );
    addLineCylinder(
      threeD_scene,
      frame1LineLength,
      4.7,
      frame1LineLength / 2 + 3 - 5.3,
      0.3,
      Math.PI / 60,
      0,
      -Math.PI / 3.3
    );

    addLineCylinder(
      threeD_scene,
      frame1LineLength,
      5.3,
      frame1LineLength / 2 + 3 - 5.4,
      9.8,
      (-2 * Math.PI) / 60,
      0,
      Math.PI / 3.3
    );
    addLineCylinder(
      threeD_scene,
      frame1LineLength,
      4.7,
      frame1LineLength / 2 + 3 - 5.3,
      9.8,
      (-2 * Math.PI) / 60,
      0,
      -Math.PI / 3.3
    );

    let frame2LineLength = 10.05;
    addLineCylinder(
      threeD_scene,
      frame2LineLength,
      0.85,
      frame2LineLength / 2 + 9 - 4.6,
      4.8,
      Math.PI / 3.1,
      0,
      -Math.PI / 65
    );
    addLineCylinder(
      threeD_scene,
      frame2LineLength,
      0.85,
      frame2LineLength / 2 + 9 - 4.5,
      5.2,
      -Math.PI / 3.1,
      0,
      -Math.PI / 65
    );

    addLineCylinder(
      threeD_scene,
      frame2LineLength,
      9.15,
      frame2LineLength / 2 + 9 - 4.6,
      4.8,
      Math.PI / 3.1,
      0,
      Math.PI / 60
    );
    addLineCylinder(
      threeD_scene,
      frame2LineLength,
      9.15,
      frame2LineLength / 2 + 9 - 4.5,
      5.2,
      -Math.PI / 3.1,
      0,
      Math.PI / 65
    );

    addLineCylinder(
      threeD_scene,
      frame2LineLength,
      5.2,
      frame2LineLength / 2 + 9 - 4.6,
      0.8,
      (2 * Math.PI) / 60,
      0,
      Math.PI / 3.1
    );
    addLineCylinder(
      threeD_scene,
      frame2LineLength,
      4.8,
      frame2LineLength / 2 + 9 - 4.5,
      0.8,
      (2 * Math.PI) / 60,
      0,
      -Math.PI / 3.1
    );

    addLineCylinder(
      threeD_scene,
      frame2LineLength,
      5.2,
      frame2LineLength / 2 + 9 - 4.6,
      9.25,
      (-2 * Math.PI) / 60,
      0,
      Math.PI / 3.1
    );
    addLineCylinder(
      threeD_scene,
      frame2LineLength,
      4.8,
      frame2LineLength / 2 + 9 - 4.5,
      9.25,
      (-2 * Math.PI) / 60,
      0,
      -Math.PI / 3.1
    );

    let horizontal1LineLength = 9;
    addLineCylinder(
      threeD_scene,
      horizontal1LineLength,
      0.6,
      horizontal1LineLength / 2 + 2.3,
      5,
      Math.PI / 2,
      Math.PI / 2,
      0
    );
    addLineCylinder(
      threeD_scene,
      horizontal1LineLength,
      9.4,
      horizontal1LineLength / 2 + 2.3,
      5,
      Math.PI / 2,
      Math.PI / 2,
      0
    );

    addLineCylinder(
      threeD_scene,
      horizontal1LineLength,
      5,
      horizontal1LineLength / 2 + 2.3,
      0.5,
      0,
      0,
      Math.PI / 2
    );
    addLineCylinder(
      threeD_scene,
      horizontal1LineLength,
      5,
      horizontal1LineLength / 2 + 2.3,
      9.4,
      0,
      0,
      Math.PI / 2
    );

    let horizontal2LineLength = 8;
    addLineCylinder(
      threeD_scene,
      horizontal2LineLength,
      1,
      horizontal2LineLength / 2 + 8,
      5,
      Math.PI / 2,
      Math.PI / 2,
      0
    );
    addLineCylinder(
      threeD_scene,
      horizontal2LineLength,
      9,
      horizontal2LineLength / 2 + 8,
      5,
      Math.PI / 2,
      Math.PI / 2,
      0
    );

    addLineCylinder(
      threeD_scene,
      horizontal2LineLength,
      5,
      horizontal2LineLength / 2 + 8,
      0.9,
      0,
      0,
      Math.PI / 2
    );
    addLineCylinder(
      threeD_scene,
      horizontal2LineLength,
      5,
      horizontal2LineLength / 2 + 8,
      9,
      0,
      0,
      Math.PI / 2
    );

    // Code for flare connecting members
    let flareConnectingLineLength = 11.4;
    let flareLine1 = addLineCylinder(
      threeD_scene,
      flareConnectingLineLength,
      5,
      flareConnectingLineLength / 2 + 6.3,
      5,
      0,
      -Math.PI / 4,
      Math.PI / 2
    );
    let flareLine2 = addLineCylinder(
      threeD_scene,
      flareConnectingLineLength,
      5,
      flareConnectingLineLength / 2 + 6.3,
      5,
      0,
      Math.PI / 4,
      Math.PI / 2
    );
    (flareLine1.material as any).color.setHex(0x000000);
    (flareLine2.material as any).color.setHex(0x000000);
  }

  function addLineCylinder(
    threeD_scene: THREE.Scene,
    length: number,
    posX: number,
    posY: number,
    posZ: number,
    rotationX: number,
    rotationY: number,
    rotationZ: number
  ) {
    let towerLineCylinderGeometry = new THREE.CylinderBufferGeometry(
      0.1,
      0.15,
      length,
      32
    );

    // let vertices = towerLineCylinderGeometry.attributes.position;

    // change upper vertices
    // let v3 = new THREE.Vector3(); // temp vector
    // for (let i = 0; i < vertices.count; i++) {
    //     v3.fromBufferAttribute(vertices, i); // set the temp vector
    //   v3.y = v3.y > 0 ? (v3.x * 0.5) + 2.5 : v3.y ; // change position by condition and equation
    // vertices.setY(i, v3.y); // set Y-component of a vertex
    // }

    // var towerLineCylinderMaterial = new THREE.MeshPhongMaterial({color: 0xb9b923, emissive: 0x000000});
    let towerLineCylinderMaterial = new THREE.MeshPhongMaterial({
      color: 0x9b870c,
      specular: 0x050505,
      shininess: 100
    });
    let towerLineCylinderMesh = new THREE.Mesh(
      towerLineCylinderGeometry,
      towerLineCylinderMaterial
    );
    threeD_scene.add(towerLineCylinderMesh);

    towerLineCylinderMesh.position.x = posX;
    towerLineCylinderMesh.position.y = posY;
    towerLineCylinderMesh.position.z = posZ;
    towerLineCylinderMesh.rotation.set(rotationX, rotationY, rotationZ);

    return towerLineCylinderMesh;
  }

  function cylinderMesh(pointX: THREE.Vector3, pointY: THREE.Vector3) {
    // edge from X to Y
    let direction = new THREE.Vector3().subVectors(pointY, pointX);
    let arrow = new THREE.ArrowHelper(direction, pointX);

    // cylinder: radiusAtTop, radiusAtBottom, height, radiusSegments, heightSegments
    let edgeGeometry = new THREE.CylinderGeometry(
      0.2,
      0.2,
      direction.length(),
      6,
      4
    );

    let edge = new THREE.Mesh(
      edgeGeometry,
      new THREE.MeshBasicMaterial({ color: 0x0000ff })
    );
    edge.setRotationFromEuler(arrow.rotation.clone());
    let vector3 = new THREE.Vector3().addVectors(
      pointX,
      direction.multiplyScalar(0.5)
    );
    edge.position.set(vector3.x, vector3.y, vector3.z);
    return edge;
  }

  useEffect(() => {
    threeD_renderer &&
      threeD_scene &&
      threeD_camera &&
      threeD_controls &&
      animate3DPage(
        threeD_renderer,
        threeD_scene,
        threeD_camera,
        threeD_controls
      );
  }, [threeD_renderer, threeD_scene, threeD_camera, threeD_controls]);

  // Function to request render for 3D scene animations
  function animate3DPage(
    threeD_renderer: THREE.Renderer,
    threeD_scene: THREE.Scene,
    threeD_camera: THREE.Camera,
    threeD_controls: OrbitControls
  ) {
    requestAnimationFrame(() =>
      animate3DPage(
        threeD_renderer,
        threeD_scene,
        threeD_camera,
        threeD_controls
      )
    );
    threeD_controls.update();
    render3DPage(threeD_renderer, threeD_scene, threeD_camera);
  }

  // Function to perform 3D scene animations
  function render3DPage(
    threeD_renderer: THREE.Renderer,
    threeD_scene: THREE.Scene,
    threeD_camera: THREE.Camera
  ) {
    threeD_renderer.render(threeD_scene, threeD_camera);
  }

  return <canvas ref={canvasRef} />;
};

export default WorkField;
