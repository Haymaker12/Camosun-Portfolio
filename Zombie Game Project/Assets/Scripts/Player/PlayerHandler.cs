using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class PlayerHandler : MonoBehaviour
{
    public Animator anim;

    //CAMERA
    public float defaultFov = 40.0f;
    public float fovSpeed = 15.0f;
    public float aimFov = 15.0f;

    //GUN
    public bool gun;
    public GameObject gunObject;
    public GameObject knifeObject;
    private bool isAiming;
    private static int ammo;

    public float mouseSensitivity = 400f;
    public Transform playerBody;
    float rotationX = 0f;
    public float distance = 2f;
    
    // Start is called before the first frame update
    void Start()
    {
        Cursor.lockState = CursorLockMode.Locked;
        playerBody.transform.rotation = new Quaternion(0, 180, 0, 0);
    }

    // Update is called once per frame
    void Update()
    {
        lookRotation();
        checkForGun();
        
    }

    //Handle Mouse movements to determine mouselook of player
    void lookRotation()
    {
        float mouseX = Input.GetAxis("Mouse X") * mouseSensitivity * Time.deltaTime;
        float mouseY = Input.GetAxis("Mouse Y") * mouseSensitivity * Time.deltaTime;

        rotationX -= mouseY;
        rotationX = Mathf.Clamp(rotationX, -75f, 75f);

        transform.localRotation = Quaternion.Euler(rotationX, 0f, 0f);
        playerBody.Rotate(Vector3.up * mouseX);
    }

    //Continous Raycast that will determine if player is able to pick up weapon and execute.
    void checkForGun()
    {
        if (gun == false)
        {
            RaycastHit item;
            if (Physics.Raycast(transform.position, transform.TransformDirection(Vector3.forward), out item, distance))
            {
                if (item.transform.tag == "Gun")
                {
                    if (Input.GetKeyDown("e"))
                    {
                        gun = true;
                        Destroy(item.transform.gameObject);
                    }
                }
            }

            if (gun == true)
            {
                gunObject.SetActive(true);
                knifeObject.SetActive(false);
            }
        }
    }
}
