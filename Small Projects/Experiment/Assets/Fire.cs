using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.Playables;

public class Fire : MonoBehaviour
{
    public Animator bang;
    public PlayableDirector playableDirector;

    // Start is called before the first frame update
    void Start()
    {
        
    }

    // Update is called once per frame
    void Update()
    {
        if (Input.GetKeyDown(KeyCode.UpArrow))
        {
            playableDirector.Play();
            bang.SetTrigger("Recoil");
        }
    }
}
