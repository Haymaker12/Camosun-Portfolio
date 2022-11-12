using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class Bounce : MonoBehaviour
{
    public Animator boing;
    
    // Start is called before the first frame update
    void Start()
    {
        
    }

    // Update is called once per frame
    void Update()
    {
        if (Input.GetKeyDown("space"))
        {
            boing.SetTrigger("Ball");
        }
        if (Input.GetKeyDown(KeyCode.UpArrow))
        {
            boing.SetTrigger("Recoil");
        }
    }
}
